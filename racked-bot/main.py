import fastapi
import slack_bolt
import slack_bolt.adapter.fastapi
import os


app = fastapi.FastAPI()
slack_app = slack_bolt.App(token=os.environ["SLACK_BOT_TOKEN"], signing_secret=os.environ["SLACK_SIGNING_SECRET"])

FORM_ID = "ixoUHB5zNFus"
CHANNEL_ID = "C0AL7ULKD3R"

@app.post("/websocket/register") 
async def register_websocket(request: fastapi.Request):
    # From fillout form!
    
    #{'formId': 'ixoUHB5zNFus', 'formName': 'Racked RSVP', 'submission': {'submissionId': '', 'submissionTime': '2026-03-20T23:07:21.329Z', 'lastUpdatedAt': '2026-03-20T23:07:21.329Z', 'questions': [{'id': '1Bqa', 'name': 'Whats your Slack ID? (Get yours at #what-is-my-slack-id)', 'type': 'ShortAnswer', 'value': None}, {'id': '9g2E', 'name': 'Would you like to be abducted into the #Racked channel for updates?', 'type': 'Checkbox', 'value': None}, {'id': 'n3KY', 'name': 'Any feedback? (website, concept, etc.)', 'type': 'LongAnswer', 'value': None}], 'calculations': [], 'urlParameters': [], 'quiz': {}, 'documents': [], 'scheduling': [], 'payments': []}}
    
    body = await request.json()
    formID = body.get("formId")
    if formID != FORM_ID:
        return {"error": "Invalid form ID"}

    questions = body.get("submission", {}).get("questions", [])
    slack_id = None
    wants_updates = False
    for question in questions:
        if question.get("id") == "1Bqa":
            slack_id = question.get("value")
        if question.get("id") == "9g2E":
            wants_updates = bool(question.get("value"))

    if wants_updates and isinstance(slack_id, str) and slack_id:
        slack_app.client.conversations_invite(channel=CHANNEL_ID, users=slack_id)
    
    
    
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)