// Importing database
let PouchDB = require('pouchdb');
let db = new PouchDB('Account_Database');

// Encryption


let encryptalpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '<', ',', '>', '.', '?', '/', ':', ';', "'", '"', '{', '[', '}', ']', '-', '_', '+', '=', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '~', '\\', '`', '\\', '|'];

let codecrypt = ['fH7W&/67W_ESD=N},LkBvEY=W@', 'W,"Rw(#AI.J0t$YI7x*W@~izO', 'dkGsJ@v{Wd%N_V""T>-gH\\\\mgcOAU', 't*^>|b41pQcxA*8P&,cVS6pusle', 'OYn4C`\\\\a},F\\\\)tM?;Kvtmp)p,Y(', 'Lu!`Ep3y!F5nQmktj?9n8Jg|>}.', 'j`avb\\\\zzXq8AQM^u)pk5*O69my', 'U,ArH)<wYl""qN-iCSWZO7_5E#}7', '!$<%K,tJHxhVV\\\\4{E,Oc1cy:^W1', 'abRh)?myC+<1^cB%\\\\6"8f}183^*', 'q<t{QmIrr%qX~~FnJuD{.+#7eyF', '5OG>Wa<`M^m(b+5/9Io)RzA|ci', 'ejc184*0Ly|E^zI(?KI<W%@g$sa', 'Q@xGqqIx4j1+o`gJllbLX^J^w@', '@H74ccVE}(2Boi}IHpn3j7?y{R', 'KvNAJ*>/F4<#a#A""kZMd`n_GZbH', 'e_22P-&7EcZ/Y2O+9z){*O8vu;>', 'dLt:\\\\?@,Ylpk5+%C\\\\%Op#X%h}\\\\K', '$o^S8DZ(TXqY6WcZW(#3UNgQyF', ':n?nlv`r2%zZ0I"pWg|YVqzORlx', 'U-"&CpPaF7;MRP,P+w6Kcp/A%U_', 'la.cx$LQL338i20A6TXcIJ:^""~-', 'Z>aF-$e/kJx$)Xz5fjH6143{4B{', '+t(!G(JSZ;QQ7HsB4/v(Z8xPcH', 'xPCIuL*j5F#"w(+BoZ}6a?/<Oj', 'HcJd8=;!d^-B4EJoPw5^3v>&""~d', '~R#q*zH=""3QDZK~5$V5?gYBVK|', 'U\\\\uP?k{oy){KIVnbZgg/KS^pPn5', 'u{\\\\w|3~uQk/GiH0Abo\\\\ESQ#FZ/V', 'G^PjJ@n@2yMqIyk1r$~^f"d-*oA', 'gr4twUb#igU6j>;|dn`zetmL(PL', '|J>#""8Iziq""khh\\\\G<prwVfS9)MQ', 'B|JClH.02uGpLnB5~<;5-=}#@=#', ',*wMy5ikq(U_:K=eSM""YG!/R<}!', 'wB>r,v;NO$}")%dIM-Hu1fwt(0|', 'eE\\\\*+1,"".o>get""f3\\\\&H4"xHok,', 'yOU)mu{ap`&!AJ/h#P=;gF3Aq1u', 'a4D#F11wH\\\\(Q+Ha$c%:-k.:ZT,', 'JAdIQ0%m""&{D5iVU^rJ-4&6,df', 'l$G/iH=O$l`\\\\dt"",I=zU-u}n2D\\\\', '{Jsc"2=Nzc,,&y_aEZ54z$E1Rbb', '2zz(\\\\qG4cU(RxZuFKe3"x(>);hd', 'N")MN0T\\\\OL9"My@7Se(&#6&R', 'WI5RO5X#2w(I98s+Obic)z01\\\\Zf', '_t1_?B\\\\.z}_ZyLs}lH&!D2$Y<1E', 'jD<?RweS+q1ijYjGG)KMw.PrWsI', 's""n@SqJlSl+,D-2P:Mj6Tlg.u^', '"1f""EXrg3hE2R+%_{=E0/Lhx8h', 'C\\\\DIjzE#~U,;qJ1R\\\\L3(MlJ);3', '71Pb\\\\O""Z6GvZC/,t+%A+kB5xj6j', '0VUL%7%UB}tJZ?gd@P;A<!|o#\\\\j', '2mmX>A\\\\xy}&N}UUhqWok{=g1pLt', 'a""Liv&\\\\1f7-6Dfs\\\\l`WM.Vr3B', 'L#b`.Aoya`S(XnLFP$o\\\\8Dlw04', 'l0AFgedT-?&hJm-c4tgHD+o8H/', 'nS~y%#4QX^7\\\\S%C\\\\*sKb|xbR:*F', '-Yiwx0R#u?b7fWTvWI""6P%6{v;', 'xF\\\\R>f^<.ob{#Zf(V,""a<J4M""Mq', 'EO(Y3b<+jO}1""GvgoPeZIfMcF', '}MrA:.Gu"#S\\\\(:I_H6F~B?XFcSe', 'CU.<5nCJWds+4rfH#hl@0G7o;7D', 'WGe9sO<LV1""3`EbQ-2/yAfj_!L', 'O`.""e>vQo1i=\\\\%rPUawSze`5f""', 'i!RJ9MCwn\\\\@w)o@1z|=OlY?p%', 'l>;t@23h$K4)=1I#a0)+Nb?#V_', '-w5#Bf;X+k7;"$g+WhoQ|;c|%qW', 'B{gY)FB!/C~P3?+/v-s~%$c)JM4', 'VsFE&GZ8#JSMCAG(&xrsLrc*jhe', '*v)Lr+P={a>\\\\xSc-,OfXGjA_VT9', 'PuB!tta+_1lzU#@K:>\\\\T*rZtvN\\\\', 'I;:GXxe;B8Nov\\\\!sudyI3~uXZ', 'oyHgQ1""B?x<@s\\\\OMUEpeBafaD%', ')JN{Q#tfySvF_*5w&(X4:y8T2jY', 'G=vaTNuBL4-y""P\\\\(Q|rzn%8do%', ')A$Ai6Su~DG#K}pOl:$n+Ik-7(', '!&Ee7\\\\@8HzF}7wIi_;1\\\\Gp28\\\\W', 'ZGLk&)DNJ`-~/6Xc""7AW$T"6/4d', 'oUE(:~JP&eYlGrTI91}r>QM;<', 'W*atciU$~4n^18qz{b%:w\\\\7,4W', '+=|GHnvrWxomge*y_Ce*Rf1_QP', 'zPK\\\\\\\\8xZ"u\\\\}2IjA;GG{Om!{e,', 'R.GIw5Jh_}-Cd/gxUBo"+=E}&`', '+2v)w<!ZBU5ABDAq)W!WT3U;MBh', 'Ui|6&/^)6qb?9w>EZ,%C;6"wJ!B', 'vDzjh=x#pd&eJ$/0nb}Mk=l7&#', '`iORU&a%pRz^`YaA/}%K""hnyk=T', 'G_ATa,RcsdxmE,5xOJGRdJv$A/`', 'ZY#(Wj!2l:*#zJ(ypaRSPDXK.y`', 'mhFmz}rYz1!CoE>WuS,<gho.C', 'Am~aW6*7#<)tf:Udx;T(nvg0gD', 'J4zpt#I\\\\}{7eYg5+Q\\\\w0G$b!kZ$', '7#;8s1%qH10o)1^+fqty=5V_siF', 'r\\\\#+OWV3=^j<R0;W_Slu}X}ipo<', '@:0vBFZ_8:3Q9uo,W7HT?+QRLB', ';SQjS+KPw+-I-\\\\mgR\\\\V|""L0SJ\\\\C', '__hlmNn>9GBIuW""_K*/nfN7BAe:', 'juAK>4:vQ`Js|6hCb{O|"X{M(*_', '*UH,7$m)jtQj$?X"9SY-eq0""2*F', 'Ju>qT}+:\\\\o>0#nY;TH,j2WyN0)F', 'U.k%1%+nk/n>`3PjW6,WtiFIn\\\\R', 'fH7W&/67W_ESD=N},LkBvEY=W@', 'W,"Rw(#AI.J0t$YI7x*W@~izO', 'dkGsJ@v{Wd%N_V""T>-gH\\\\mgcOAU', 't*^>|b41pQcxA*8P&,cVS6pusle', 'OYn4C`\\\\a},F\\\\)tM?;Kvtmp)p,Y(', 'Lu!`Ep3y!F5nQmktj?9n8Jg|>}.', 'j`avb\\\\zzXq8AQM^u)pk5*O69my', 'U,ArH)<wYl""qN-iCSWZO7_5E#}7', '!$<%K,tJHxhVV\\\\4{E,Oc1cy:^W1', 'abRh)?myC+<1^cB%\\\\6"8f}183^*', 'q<t{QmIrr%qX~~FnJuD{.+#7eyF', '5OG>Wa<`M^m(b+5/9Io)RzA|ci', 'ejc184*0Ly|E^zI(?KI<W%@g$sa', 'Q@xGqqIx4j1+o`gJllbLX^J^w@', '@H74ccVE}(2Boi}IHpn3j7?y{R', 'KvNAJ*>/F4<#a#A""kZMd`n_GZbH', 'e_22P-&7EcZ/Y2O+9z){*O8vu;>', 'dLt:\\\\?@,Ylpk5+%C\\\\%Op#X%h}\\\\K', '$o^S8DZ(TXqY6WcZW(#3UNgQyF', ':n?nlv`r2%zZ0I"pWg|YVqzORlx', 'U-"&CpPaF7;MRP,P+w6Kcp/A%U_', 'la.cx$LQL338i20A6TXcIJ:^""~-', 'Z>aF-$e/kJx$)Xz5fjH6143{4B{', '+t(!G(JSZ;QQ7HsB4/v(Z8xPcH', 'xPCIuL*j5F#"w(+BoZ}6a?/<Oj', 'HcJd8=;!d^-B4EJoPw5^3v>&""~d', '~R#q*zH=""3QDZK~5$V5?gYBVK|', 'U\\\\uP?k{oy){KIVnbZgg/KS^pPn5', 'u{\\\\w|3~uQk/GiH0Abo\\\\ESQ#FZ/V', 'G^PjJ@n@2yMqIyk1r$~^f"d-*oA', 'gr4twUb#igU6j>;|dn`zetmL(PL', '|J>#""8Iziq""khh\\\\G<prwVfS9)MQ', 'B|JClH.02uGpLnB5~<;5-=}#@=#', ',*wMy5ikq(U_:K=eSM""YG!/R<}!', 'wB>r,v;NO$}")%dIM-Hu1fwt(0|', 'eE\\\\*+1,"".o>get""f3\\\\&H4"xHok,', 'yOU)mu{ap`&!AJ/h#P=;gF3Aq1u', 'a4D#F11wH\\\\(Q+Ha$c%:-k.:ZT,', 'JAdIQ0%m""&{D5iVU^rJ-4&6,df', 'l$G/iH=O$l`\\\\dt"",I=zU-u}n2D\\\\', '{Jsc"2=Nzc,,&y_aEZ54z$E1Rbb', '2zz(\\\\qG4cU(RxZuFKe3"x(>);hd', 'N")MN0T\\\\OL9"My@7Se(&#6&R', 'WI5RO5X#2w(I98s+Obic)z01\\\\Zf', '_t1_?B\\\\.z}_ZyLs}lH&!D2$Y<1E', 'jD<?RweS+q1ijYjGG)KMw.PrWsI', 's""n@SqJlSl+,D-2P:Mj6Tlg.u^', '"1f""EXrg3hE2R+%_{=E0/Lhx8h', 'C\\\\DIjzE#~U,;qJ1R\\\\L3(MlJ);3', '71Pb\\\\O""Z6GvZC/,t+%A+kB5xj6j', '0VUL%7%UB}tJZ?gd@P;A<!|o#\\\\j', '2mmX>A\\\\xy}&N}UUhqWok{=g1pLt', 'a""Liv&\\\\1f7-6Dfs\\\\l`WM.Vr3B', 'L#b`.Aoya`S(XnLFP$o\\\\8Dlw04', 'l0AFgedT-?&hJm-c4tgHD+o8H/', 'nS~y%#4QX^7\\\\S%C\\\\*sKb|xbR:*F', '-Yiwx0R#u?b7fWTvWI""6P%6{v;', 'xF\\\\R>f^<.ob{#Zf(V,""a<J4M""Mq', 'EO(Y3b<+jO}1""GvgoPeZIfMcF', '}MrA:.Gu"#S\\\\(:I_H6F~B?XFcSe', 'CU.<5nCJWds+4rfH#hl@0G7o;7D', 'WGe9sO<LV1""3`EbQ-2/yAfj_!L', 'O`.""e>vQo1i=\\\\%rPUawSze`5f""', 'i!RJ9MCwn\\\\@w)o@1z|=OlY?p%', 'l>;t@23h$K4)=1I#a0)+Nb?#V_', '-w5#Bf;X+k7;"$g+WhoQ|;c|%qW', 'B{gY)FB!/C~P3?+/v-s~%$c)JM4', 'VsFE&GZ8#JSMCAG(&xrsLrc*jhe', '*v)Lr+P={a>\\\\xSc-,OfXGjA_VT9', 'PuB!tta+_1lzU#@K:>\\\\T*rZtvN\\\\', 'I;:GXxe;B8Nov\\\\!sudyI3~uXZ', 'oyHgQ1""B?x<@s\\\\OMUEpeBafaD%', ')JN{Q#tfySvF_*5w&(X4:y8T2jY', 'G=vaTNuBL4-y""P\\\\(Q|rzn%8do%', ')A$Ai6Su~DG#K}pOl:$n+Ik-7(', '!&Ee7\\\\@8HzF}7wIi_;1\\\\Gp28\\\\W', 'ZGLk&)DNJ`-~/6Xc""7AW$T"6/4d', 'oUE(:~JP&eYlGrTI91}r>QM;<', 'W*atciU$~4n^18qz{b%:w\\\\7,4W', '+=|GHnvrWxomge*y_Ce*Rf1_QP', 'zPK\\\\\\\\8xZ"u\\\\}2IjA;GG{Om!{e,', 'R.GIw5Jh_}-Cd/gxUBo"+=E}&`', '+2v)w<!ZBU5ABDAq)W!WT3U;MBh', 'Ui|6&/^)6qb?9w>EZ,%C;6"wJ!B', 'vDzjh=x#pd&eJ$/0nb}Mk=l7&#', '`iORU&a%pRz^`YaA/}%K""hnyk=T', 'G_ATa,RcsdxmE,5xOJGRdJv$A/`', 'ZY#(Wj!2l:*#zJ(ypaRSPDXK.y`', 'mhFmz}rYz1!CoE>WuS,<gho.C', 'Am~aW6*7#<)tf:Udx;T(nvg0gD', 'J4zpt#I\\\\}{7eYg5+Q\\\\w0G$b!kZ$', '7#;8s1%qH10o)1^+fqty=5V_siF', 'r\\\\#+OWV3=^j<R0;W_Slu}X}ipo<', '@:0vBFZ_8:3Q9uo,W7HT?+QRLB', ';SQjS+KPw+-I-\\\\mgR\\\\V|""L0SJ\\\\C', '__hlmNn>9GBIuW""_K*/nfN7BAe:', 'juAK>4:vQ`Js|6hCb{O|"X{M(*_', '*UH,7$m)jtQj$?X"9SY-eq0""2*F', 'Ju>qT}+:\\\\o>0#nY;TH,j2WyN0)F', 'U.k%1%+nk/n>`3PjW6,WtiFIn\\\\R'];
let encryption = password => {
  let passworde = CryptoJS.AES.encrypt(password , "");
  return passworde.toString();
};

console.log(encryption("Hello world"))

let input_list = [document.getElementById("username_login"), document.getElementById("password_login")];

input_list.forEach(elements => {
  elements.addEventListener("input", () => {
    if (document.getElementById("username_login").value != "" && document.getElementById("password_login").value != "") {
      document.getElementById("btn_login").style.opacity = "1";
    }
    else {
      document.getElementById("btn_login").style.opacity = "0.5";
    }
  })
});

document.getElementById("join_log").addEventListener("click", () => {
  document.querySelector("title").innerHTML = "BO E COMMERCE - JOIN US";
  document.getElementById("login_box").setAttribute("class", "none");
  document.getElementById("join_box").setAttribute("class", "flex center cols white md-radius shadow");
})

document.getElementById("log_join").addEventListener("click", () => {
  document.querySelector("title").innerHTML = "BO E COMMERCE - LOGIN";
  document.getElementById("join_box").setAttribute("class", "none");
  document.getElementById("login_box").setAttribute("class", "flex center cols white md-radius shadow");
});

let input_list_join = [document.getElementById("username_join"), document.getElementById("name_join"), document.getElementById("email_join"), document.getElementById("password_join") , document.getElementById("password_joinr")]

input_list_join.forEach(elements => {
  elements.addEventListener("input", () => {
    let r = -3;
    input_list_join.forEach(elements => {
      if (elements.value != "") {
        r += 1;
      }
      else {
        r -= 1;
      }
    });
    if (r > 0) {
      document.getElementById("btn_join").style.opacity = "1";
    }
    else {
      document.getElementById("btn_join").style.opacity = "0.5";
    }
  })
});

let join_btn = (info) => {
  if (info.value != "") {
    document.getElementById("btn_join").style.opacity = "1";
  }
  else {
    document.getElementById("btn_join").style.opacity = "0.5";
  }
}

let psj = false;

document.getElementById("password_see_join").addEventListener("click", () => {
  if (psj == false) {
    document.getElementById("password_join").setAttribute("type", "text");
    document.getElementById("password_joinr").setAttribute("type", "text");
    document.getElementById("password_see_join").innerHTML = "Hide the password"
    psj = true
  }
  else{
    document.getElementById("password_join").setAttribute("type", "password");
    document.getElementById("password_joinr").setAttribute("type", "password");
    document.getElementById("password_see_join").innerHTML = "Show the password"
    psj = false
  }
})

let psl = false;

document.getElementById("password_see_login").addEventListener("click", () => {
  if (psl == false) {
    document.getElementById("password_login").setAttribute("type", "text");
    document.getElementById("password_see_login").innerHTML = "Hide the password"
    psl = true
  }
  else{
    document.getElementById("password_login").setAttribute("type", "password");
    document.getElementById("password_see_login").innerHTML = "Show the password"
    psl = false
  }
})