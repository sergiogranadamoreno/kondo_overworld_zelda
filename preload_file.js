//########################################
//# This page contains score data, timing data and the media file path. Save it as a text file in
//# the same folder as abcweb.html. Abcweb preloads score and media when it is opened with the
//# file name as parameter in the url, for example: http://your.domain.org/abcweb.html?file_name
//# Also works locally with file:///path/to/abcweb.html?file_name
//# **** You have to correct the path to the media file below! (media_file="...";) ****
//########################################
//#
media_file = "The Legend of Zelda - Overworld.mp3";
offset_js = 0.00;
opt = {"jump":0,"no_menu":0,"repufld":0,"noplyr":0,"nocsr":0,"media_height":"","btns":1,"ipadr":"","mstr":0,"autscl":0,"ctrmed":0,"ctrnot":0,"lncsr":0,"opacity":0.2,"synbox":0,"speed":1,"top_margin":0,"yubvid":"","nomed":0,"delay":0,"repskip":0,"spdctl":0,"lopctl":false,"metro":0,"btime":-1,"etime":0};
lpRec = {"loopBtn":1,"loopStart":0,"loopEnd":69.47368421052636};
times_arr = [[0.00,2.08,3.76,5.44,6.92,8.49,10.07,11.65,13.23,14.81],
[14.81,16.39,17.97,19.55,21.13,22.71,24.28,25.86,27.44,29.02,30.60],
[30.60,32.18,33.76,35.34,36.92,38.49,40.07,41.65,43.23,44.81,46.39],
[46.39,47.97,49.95,51.83,53.41,54.98,56.56,58.14,59.72,61.30,62.88],
[62.88,64.46,66.04,67.82,69.39,71.07]];
abc_arr = ["X:1",
"T:The Legend of Zelda - \"Overworld\"",
"%%scale 0.83",
"%%score { ( 1 2 ) | 3 }",
"L:1/8",
"Q:1/4=152",
"M:4/4",
"I:linebreak $",
"K:Bb",
"V:1 treble nm=\"Piano\" snm=\"Pno.\"",
"V:2 treble ",
"V:3 bass ",
"V:1",
" [DB] z2 (3:3:2z2 [DB] (3[DB][DB][DB] | (3[CB] z [C_A] [CB]2 (3:2:2z2 [CB] (3[CB][CB][CB] | %2",
" (3[_DB] z [D_A] [DB]2 (3z z [DB] (3[DB][DB][DB] |$ %3",
" [_DB][A,F]/[A,F]/ [A,F][A,F]/[A,F]/ [A,F][A,F]/[A,F]/ [A,F][A,F] |: %4",
" ([DB]2 (3[DF]DC [DF]>)B B/c/d/e/ | f4 ff (3f_g_a |$ b4 (3bbb (3b_a_g | (3_a z _g f4 f2 | %8",
" ee/f/ _g4 fe |$ dd/e/ f4 ed | cc/d/ =e4 g2 | %11",
" [Af][A,F]/[A,F]/ [A,F][A,F]/[A,F]/ [A,F][A,F]/[A,F]/ [A,F][A,F] |$ [DB]2 (3[DF]DC F>B B/c/d/e/ | %13",
" (f4 f)f (3f_g_a | b6 ([_f_d']2 | .[ec']2) [ca]4 [Af]2 |$ [_Ge]4 z2 ([_db]2 | .[ca]2) [Af]4 [Af]2 | %18",
" [_c_g]4 z2 [_db]2 | .[ca]2 [Af]4 [Ad]2 | [_Ge]4 z2 [_c_g]2 |$ [Bf]2 [F_d]4 [_DB]2 | cc/d/ =e4 g2 | %23",
" [Af][A,F]/[A,F]/ [A,F][A,F]/[A,F]/ [A,F][A,F]/[A,F]/ [A,F][A,F] :| %24",
"V:2",
" x8 | x8 | x8 |$ x8 |: z6 D/E/F/G/ | A>B B/c/d/e/ z z (3ABc |$ d>_G G/_A/B/c/ dd (3dcB | %7",
" (3_d z _A (3AA_G (3:2:2A2 A (3AGA | _GG/F/ GG/_A/ B2 AG |$ FF/E/ FF/_G/ _A2 GF | %10",
" =E2 E>F GG/A/ Bc | x8 |$ z4 D3/2 z/ D/E/F/G/ | _A>B B/c/d/e/ z2 (3ABc | _d6 z2 | x8 |$ x8 | x8 | %18",
" x8 | x8 | x8 |$ x8 | =E2 E>F GG/A/ Bc | x8 :| %24",
"V:3",
" B,,2 (3B,,B,,B,, B,,2 (3B,,B,,B,, | _A,,2 (3A,,A,,A,, A,,2 (3A,,A,,A,, | %2",
" _G,,2 (3G,,G,,G,, G,,2 (3G,,G,,G,, |$ F,,2 F,,2 F,,2 =G,,=A,, |: B,,2 (3B,,B,,_A,, B,,2 B,,2 | %5",
" _A,,2 (3A,,A,,_G,, A,,2 A,,2 |$ _G,,2 (3G,,G,,_F,, G,,2 G,,2 | _D,2 (3D,D,_C, D,2 D,2 | %8",
" _C,2 (3C,C,B,, C,2 C,2 |$ B,,2 (3B,,B,,_A,, B,,2 B,,2 | C,2 (3C,C,B,, C,2 C,2 | %11",
" F,,2 F,,2 F,,2 G,,A,, |$ B,,2 (3B,,B,,_A,, B,,2 B,,2 | _A,,2 (3A,,A,,_G,, A,,2 A,,2 | %14",
" _G,,2 (3G,,G,,_F,, G,,2 G,,2 | =F,,2 (3F,,F,,E,, F,,2 F,,2 |$ (3_F,,B,,_D, (3_F,B,_D ._F2 z2 | %17",
" .=F2 (3F,,F,,F,, .F,,2 z2 | (3_F,,B,,_D, (3_F,B,_D ._F2 z2 | .=F2 (3F,,F,,F,, .F,,2 z2 | %20",
" _C,2 (3C,C,B,, C,2 C,2 |$ B,,2 (3B,,B,,_A,, B,,2 B,,2 | C,2 (3C,C,B,, C,2 C,2 | %23",
" F,,2 F,,2 F,,2 G,,A,, :| %24",
""];
abc_enc = [];
