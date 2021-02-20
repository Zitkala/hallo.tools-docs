# Telegram Benachrichtigungen

Du kannst eine Benachrichtigung an einem Telegram-Benutzer oder -Gruppe senden. Um die ID der Gruppe oder von Dir herauszufinden musst Du nur den User [@RawDataBot](https://t.me/RawDataBot) in eine Gruppe stecken und etwas schreiben. RawDataBot antwortet darauf mit einer JSON-Response, wo Du unter `message->from->id ` Deine ID und unter `message->chat->id` die ID der Gruppe erfährst. Die ID einer Gruppe ist negativ und muss auch so angegeben werden. Beachte, dass RawDataBot dies bei jeder Nachricht macht, bis Du ihn wieder aus der Gruppe entfernst.<br>
Wie Du ein eigenes Telegram-Bot erstellst, erfährst Du in der [Dokumentation von Telegram](https://core.telegram.org/bots#6-botfather).<br>
![Telegram Notification](https://hallo.tools/img/docs/010.png)