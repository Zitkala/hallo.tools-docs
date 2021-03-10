# Commands

Um einen Command zu erstellen, musst Du in den Einstellungen unter der Kategorie "Chatbot" auf den Link "Commands" gehen und dort findest Du den Button "Command erstellen", mit welchem Du ein Command erstellen kannst.

![Create command](https://hallo.tools/img/docs/003.png)

![Create command form](https://hallo.tools/img/docs/004.png)

Bei dem Bot hast Du verschiedene Optionen, wie „Farbig schreiben“ & „Only Onstream“, welche selbsterklärend sind.

## Variablen & Funktionen

In den Felder (Content, Alternativer Content etc) stehen Dir folgende Variablen zur Verfügung:

| Variabel/Funktion | Beschreibung |
| --- | :--- |
| `{name}` | für den Namen des Benutzers, welchen den Command genutzt hat |
| `{count}` | wird die aktuelle Zahl des Counters ausgegeben |
| `{rand_char}` | gibt ein Zugallsbuchstaben von A-Z aus |
| `{rand_user}` | gibt zufällig einem Benutzer aus dem Chat aus |
| `$get(url)` | gibt die Response aus, welche von `url` wiedergegeben wird |
| `{time}` | gibt die aktuelle Uhrzeit aus |
| `{date}` | gibt das aktuelle Datum aus |
| `$twitchGames(Streamer)` | gibt die letzten 3 Kategorien aus, welcher bei `Streamer` liefen |
| `$twitchGames(Streamer,4)` | gibt die letzten `4` Kategorien aus, welcher bei `Streamer` liefen |
| `$twitchUrl(Streamer)` | generiert den Link zu dem Kanal von `Streamer` (dabei ist Groß- & Kleinschreibung egal und ob @ benutzt wird) |
| `{user}` | für den „Display Username“ der Person, welche den Command nutzte |
| `{username}` | für den Usernamen der Person, welche den Command nutzte (ist immer klein geschrieben) |
| `{user_id}` | für die User-ID, der Person, welche den Command nutzt |
| `{streamer}` | gibt den „Display Usernamen“ der/des Streamer(in) aus |
| `{streamer_username}` | gibt den Usernamen der/des Streamer(in) aus (ist immer klein geschrieben) |
| `{streamer_id}` | gibt die User-ID der/des Streamer(in) aus |
| `{upHours}` | gibt die Uptime des Streams in Stunden aus (Neustarts mit eingestellten Delay berücksichtigt) |
| `{upMinutes}` | gibt die Uptime des Streams in Minuten aus (Neustarts mit eingestellten Delay berücksichtigt) |
| `{upTime}` | gibt die Uptime des Streams formatiert aus, zBsp: *5 Stunden und 46 Minuten* (Neustarts mit eingestellten Delay berücksichtigt) |
| `$diffDays(2020-12-24)` `$diffDays(2020-12-24 20:22)` | gibt die Differenz zur aktuellen Zeit in Tagen wieder (Beispiel: 276 Tage) |
| `$diffHours(2020-12-24)` `$diffHours(2020-12-24 20:22)` | gibt die Differenz zur aktuellen Zeit in Stunden wieder (Beispiel: 623 Stunden) |
| `$diffTime(2020-12-24)` `$diffTime(2020-12-24 20:22)` | gibt die Differenz zur aktuellen Zeit formatiert wieder (Beispiel: 1 Woche, 2 Tage und 23 Stunden) |

## Argumente
Du kannst auf verschiedene Argumente im Command reagieren, also auf die Wörter die von einem Benutzer aus dem Chat nach dem Command geschrieben werden.
Zum Beispiel wird folgender Command geschrieben:  
`!command Alexa Amanda Lisa Luna Milo Muetze Niclas Nicole Prinz`  
Dann kannst Du auf die geschriebenen Wörter folgendermaßen zugreifen:

| Arg | Beschreibung |
| --- | :--- |
| `{arg1}` | gibt das 1. Wort nach dem Command aus (in dem Beispiel wäre es das Wort `Alexa`) |
| `{arg2}` | gibt das 2. Wort nach dem Command aus (in dem Beispiel wäre es das Wort `Amanda`) |
| `{arg3}` | gibt das 3. Wort nach dem Command aus (in dem Beispiel wäre es das Wort `Lisa`) |
| `{arg4}` | gibt das 4. Wort nach dem Command aus (in dem Beispiel wäre es das Wort `Luna`) |
| `{arg5}` | gibt das 5. Wort nach dem Command aus (in dem Beispiel wäre es das Wort `Milo`) |
| `{arg6}` | gibt das 6. Wort nach dem Command aus (in dem Beispiel wäre es das Wort `Muetze`) |
| `{arg7}` | gibt das 7. Wort nach dem Command aus (in dem Beispiel wäre es das Wort `Niclas`) |
| `{arg8}` | gibt das 8. Wort nach dem Command aus (in dem Beispiel wäre es das Wort `Nicole`) |
| `{arg9}` | gibt das 9. Wort nach dem Command aus (in dem Beispiel wäre es das Wort `Prinz`) |
Das ganze geht von `{arg1}` bis `{arg9}`

## Zahlen und Rechnen
| Variabel/Funktion | Beschreibung |
| --- | :--- |
| `{rand_num}` | gibt eine Zufallszahl zwischen 1 & 100 aus |
| `$rand(-10,20)` | gibt eine Zufallszahl zwischen `-10` & `20` aus. **Eingabe ohne Leerzeichen!** |
| `$rand(5.5,10.5,2)` | gibt eine Zufallszahl zwischen `5,5` & `10,5` mit `2` Dezimalstellen aus. **Eingabe ohne Leerzeichen! Punkte & Komma beachten!** |
| `$thisRand()` | gibt die erstellte Zufallszahl nochmal aus |

#### Rechnen mit der Zahl
| Variabel/Funktion | Beschreibung |
| --- | :--- |
| `$randCalc(/,2)` | *dividiert* die Zahl aus $rand durch `2`. **Eingabe ohne Leerzeichen!** |
| `$randCalc(*,5.5)` | *multipliziert* die Zahl aus $rand mit `5,5`. **Eingabe ohne Leerzeichen! Punkte & Komma beachten!** |
| `$randCalc(+,4,2)` | *addiert* `4` zu der Zahl aus $rand und Ausgabe mit `2` Dezimalstellen. **Eingabe ohne Leerzeichen! Punkte & Komma beachten!** |
| `$randCalc(-,6)` | *subtrahiert* `6` von der Zahl aus $rand. **Eingabe ohne Leerzeichen!** |
*In den Klammern wird das amerikanische Zahlensystem genutzt. Dort werden die Dezimalen nicht mit einem Komma, sondern mit einem Punkt getrennt. Ein Komma wird nur als Separator für weitere Werte genutzt. Wichtig ist auch, dass keine Leerzeichen in den Klammern genutzt werden.*
> {info} Der Aufbau ist wie folgt: $randCalc(`A`,`B`,`C`) **(Ohne Leerzeichen)**
> * A= Mathematischer Operator: `*`, `/`, `+` oder `-`
> * B = Die Zahl die zum rechnen mit dem Wert von $rand() genutzt werden soll. (Dezimalstellen mit Punkt statt Komma angeben: 2.4)
> * C = Anzahl der Dezimalstellen (Optional, Standard: 0)

## Was sind Aliases

Mit Aliases kannst Du den gleichen Command mit anderen Wörter aufrufen lassen. Wenn Du zum Beispiel den Command `rot` erstellst und als Alias `blau` und `schwarz` einträgst, steht dieser Command per `!rot`, `!blau` & `!schwarz` im Chat zur Verfügung.

## Module

Aktuell gibt es folgende Module:
* Text: Klassischer Command
* **\[deprecated\]** Verlosung: Zum Veranstalten einer Verlosung in dem Chat. Der Gewinner wird per Zufall ausgewählt
* Watchtime: Zur Ausgabe der Watchtime
* JaNein Orakel: Gibt eine Zufallsantwort aus
* Followage: Auch bekannt als Followtime. Dieser gibt dem Benutzer, der diesen nutzt, aus, wie lange dieser bereits folgt.

## Command Schützen
![Command Schützen](https://hallo.tools/img/docs/006b.png)

Unter Command schützen kannst Du bestimmen, bei wem dieser Command funktionieren soll. Dir stehen Admin, also der oder die Streamerin, Subscriber, Mods & VIPs zur Verfügung.
Wenn Du ein Command schützt, dann kannst Du optional einen alternativen Text an die Personen ausgeben lassen, welche nicht die Berechtigung haben diesen Command zu nutzen.

## Watchtime

Zur Formatierung der Watchtime hast Du folgende Möglichkeiten:

### Gesamte Zeit
| Variabel/Funktion | Beschreibung |
| --- | :--- |
| `{name}` | gibt den Namen des gewünschten Benutzers aus |
| `{time}` | für die Watchtime der in formatierter Zeit: 3 Tage, 12 Stunden und 34 Minuten |
| `{minutes}` | für die Watchtime in Minuten (nur die Zahl) |
| `{hours}` | für die Watchtime in Stunden (nur die Zahl mit 2 Kommastellen) |
| `{minutesWord}` | gibt das Wort Minute oder Minuten aus, je nachdem ob {minutes} 1 ist oder nicht |
| `{hoursWord}` | gibt das Wort Stunde oder Stunden aus, je nachdem ob {hours} 1 ist oder nicht |
### Aktueller Monat
| Variabel/Funktion | Beschreibung |
| --- | :--- |
| `{timeCurrent}` | für die Watchtime **des aktuellen Monats **in formatierter Zeit: 3 Tage, 12 Stunden und 34 Minuten |
| `{minutesCurrent}` | für die Watchtime **des aktuellen Monats** in Minuten (nur die Zahl) |
| `{hoursCurrent}` | für die Watchtime **des aktuellen Monats** in Stunden (nur die Zahl mit 2 Kommastellen) |
| `{minutesCurrentWord}` | gibt das Wort Minute oder Minuten aus, je nachdem ob {minutesCurrent} 1 ist oder nicht |
| `{hoursCurrentWord}` | gibt das Wort Stunde oder Stunden aus, je nachdem ob {hoursCurrent} 1 ist oder nicht |
### Letzter Monat
| Variabel/Funktion | Beschreibung |
| --- | :--- |
| `{timeLast}` | für die Watchtime **des letzten Monats** in formatierter Zeit: 3 Tage, 12 Stunden und 34 Minuten |
| `{minutesLast}` | für die Watchtime **des letzten Monats** in Minuten (nur die Zahl) |
| `{hoursLast}` | für die Watchtime **des letzten Monats** in Stunden (nur die Zahl mit 2 Kommastellen) |
| `{minutesLastWord}` | gibt das Wort Minute oder Minuten aus, je nachdem ob {minutesLast} 1 ist oder nicht |
| `{hoursLastWord}` | gibt das Wort Stunde oder Stunden aus, je nachdem ob {hoursLast} 1 ist oder nicht |


## Top Watchtimes
| Variabel/Funktion | Beschreibung |
| --- | :--- |
| `$topHours(5)` | gibt die `5` besten Watchtimes inklusive Namen in Stunden wieder |
| `$topHoursMonth(3)` | gibt die `3` besten Watchtimes des **aktuellen Monats** inklusive Namen in Stunden wieder |
| `$topHoursLast(4)` | gibt die `4` besten Watchtimes des **letzten Monats** inklusive Namen in Stunden wieder |
| `$topMinutes(5)` | gibt die `5` besten Watchtimes inklusive Namen in Minuten wieder |
| `$topMinutesMonth(3)` | gibt die `3` besten Watchtimes des **aktuellen Monats** inklusive Namen in Minuten wieder |
| `$topMinutesLast(4)` | gibt die `4` besten Watchtimes des **letzten Monats** inklusive Namen in Minuten wieder |


## JaNein Orakel

Diese Commands geben bei jeder Nutzung eine zufällige Antwort aus, welche Du im Menüpunkt JaNein Orakel erstellen kannst.
Dort kannst Du auch die Variabel `{name}` nutzen, welche dann mit dem Namen ersetzt wird, von dem Benutzer, welcher den Command nutzt.

![Create Yes No Oracle Answer](https://hallo.tools/img/docs/005.png)