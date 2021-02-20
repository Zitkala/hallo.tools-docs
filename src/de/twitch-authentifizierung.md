# Twitch-Authentifizierung

## Warum gibt es mehrere Verbindungen?

Warum gibt es mehrere Verbindungen?
Es gibt verschiedene Arten von Verbindungen, um eine höhere Transparenz zu gewähren und das man als Anwender nicht einfach, wie bei vielen anderen Seiten einfach alle Rechte für seinen Kanal geben muss.
Die "Website Login"-Verbindung ist die einzige welche immer benötigt wird. Alle anderen Verbindungen muss man nur herstellen, wenn man die Features nutzen möchte, für welche diese benötigt wird.

Folgende Verbindungen kannst Du mit dieser Website herstellen und folgende [Scopes](https://dev.twitch.tv/docs/authentication#scopes) werden für diese verwendet.

## Website Login

Dies ist die Verbindung, welche für den Login auf dieser Homepage genutzt wird, dabei wird die E-Mail-Adresse des Benutzers und die Twitch-ID gelesen und gespeichert.
Dafür wird folgender Scope genutzt:

```bash
user:read:email
``` 

**Dieser Scope ist der Einzige, welcher in jeder Authentifizierung vorhanden ist und sich nicht deaktivieren lässt.**

## Chatbot

Diese Verbindung ist die Verbindung zwischen dem Chatbot und dieser Website.
Es werden folgende Scopes verwendet:
```bash
channel:moderate
chat:edit
chat:read
whispers:read
whispers:edit
``` 
Diese Scopes sind alle, welche der Chatbot mit der IRC-Verbindung verwenden kann, welche er zu dem Chat des Twitch-Kanals aufbaut.

## Sonstige Verbindungen

Um andere Features nutzen zu können muss man weitere Verbindungen authentifizieren. Es werden nur Authentifizierungen verbunden, welche auch wirklich benötigt werden. Folgende Bereiche gibt es bei Twitch:
```bash
analytics:read:extensions
analytics:read:games
bits:read
channel:edit:commercial
channel:manage:broadcast
channel:manage:extensions
channel:manage:redemptions
channel:manage:videos
channel:read:editors
channel:read:hype_train
channel:read:redemptions
channel:read:stream_key
channel:read:subscriptions
clips:edit
moderation:read
user:edit
user:edit:follows
user:read:blocked_users
user:manage:blocked_users
user:read:broadcast
user:read:email
```