import json
import os
import psycopg2


def handler(event: dict, context) -> dict:
    """Сохраняет ответ гостя на приглашение и возвращает список всех ответов (GET)."""

    headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
        "Content-Type": "application/json",
    }

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": headers, "body": ""}

    conn = psycopg2.connect(os.environ["DATABASE_URL"])

    try:
        if event.get("httpMethod") == "POST":
            body = json.loads(event.get("body") or "{}")
            name = body.get("name", "").strip()
            if not name:
                return {"statusCode": 400, "headers": headers, "body": json.dumps({"error": "Имя обязательно"})}

            with conn.cursor() as cur:
                cur.execute(
                    """
                    INSERT INTO rsvp_responses (name, day1, day2, plus1, car, car_capacity, can_give_lift, message)
                    VALUES (%s, %s, %s, %s, %s, %s, %s, %s)
                    RETURNING id
                    """,
                    (
                        name,
                        body.get("day1"),
                        body.get("day2"),
                        body.get("plus1"),
                        body.get("car"),
                        body.get("carCapacity"),
                        body.get("canGiveLift"),
                        body.get("message"),
                    ),
                )
                row_id = cur.fetchone()[0]
            conn.commit()
            return {"statusCode": 201, "headers": headers, "body": json.dumps({"id": row_id, "ok": True})}

        if event.get("httpMethod") == "GET":
            with conn.cursor() as cur:
                cur.execute(
                    "SELECT id, name, day1, day2, plus1, car, car_capacity, message, created_at FROM rsvp_responses ORDER BY created_at DESC"
                )
                rows = cur.fetchall()
            data = [
                {
                    "id": r[0],
                    "name": r[1],
                    "day1": r[2],
                    "day2": r[3],
                    "plus1": r[4],
                    "car": r[5],
                    "carCapacity": r[6],
                    "message": r[7],
                    "createdAt": r[8].isoformat() if r[8] else None,
                }
                for r in rows
            ]
            return {"statusCode": 200, "headers": headers, "body": json.dumps({"responses": data})}

        return {"statusCode": 405, "headers": headers, "body": json.dumps({"error": "Method not allowed"})}

    finally:
        conn.close()