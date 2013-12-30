mpg123 FIFO commands
--------
LOAD/L <trackname>: load and start playing resource <trackname>

LOADPAUSED/LP <trackname>: load but do not start playing resource <trackname>

PAUSE/P: pause playback

STOP/S: stop playback (closes file)

JUMP/J <frame>|<+offset>|<-offset>|<[+|-]seconds>s: jump to mpeg frame <frame> or change position by offset, same in seconds if number followed by "s"

VOLUME/V <percent>: set volume in % (0..100...); float value

RVA off|(mix|radio)|(album|audiophile): set rva mode

EQ/E <channel> <band> <value>: set equalizer value for frequency band 0 to 31 on channel 1 (left) or 2 (right) or 3 (both)

EQFILE <filename>: load EQ settings from a file

SHOWEQ: show all equalizer settings (as <channel> <band> <value> lines in a SHOWEQ block (like TAG))

SEEK/K <sample>|<+offset>|<-offset>: jump to output sample position <samples> or change position by offset

SCAN: scan through the file, building seek index

SAMPLE: print out the sample position and total number of samples

SEQ <bass> <mid> <treble>: simple eq setting...

PITCH <[+|-]value>: adjust playback speed (+0.01 is 1 % faster)

SILENCE: be silent during playback (meaning silence in text form)

STATE: Print auxilliary state info in several lines (just try it to see what info is there).

TAG/T: Print all available (ID3) tag info, for ID3v2 that gives output of all collected text fields, using the ID3v2.3/4 4-character names.
   The output is multiple lines, begin marked by "@T {", end by "@T }".
   ID3v1 data is like in the @I info lines (see below), just with "@T" in front.
   An ID3v2 data field is introduced via ([ ... ] means optional):
    @T ID3v2.<NAME>[ [lang(<LANG>)] desc(<description>)]:
   The lines of data follow with "=" prefixed:
    @T =<one line of content in UTF-8 encoding>
meaning of the @S stream info:

S <mpeg-version> <layer> <sampling freq> <mode(stereo/mono/...)> <mode_ext> <framesize> <stereo> <copyright> <error_protected> <emphasis> <bitrate> <extension> <vbr(0/1=yes/no)>
The @I lines after loading a track give some ID3 info, the format:
     @I ID3:artist  album  year  comment genretext
    where artist,album and comment are exactly 30 characters each, year is 4 characters, genre text unspecified.
    You will encounter "@I ID3.genre:<number>" and "@I ID3.track:<number>".
    Then, there is an excerpt of ID3v2 info in the structure
     @I ID3v2.title:Blabla bla Bla
    for every line of the "title" data field. Likewise for other fields (author, album, etc).

