"use strict";(self.webpackChunknathaniel_vaur_henel_github_io=self.webpackChunknathaniel_vaur_henel_github_io||[]).push([[6515],{8477:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>i,toc:()=>o});var s=a(4848),l=a(8453);const t={last_update:{date:"06/12/2022"},tags:["java","langage","d\xe9veloppement"],keywords:["devento","aide-m\xe9moire","fiche technique"],description:"Fiche technique et aide-m\xe9moire pour d\xe9veloppeur sur les nouveaut\xe9s de Java 11 \xe0 Java 17"},r="De Java 11 \xe0 Java 17, les nouveaut\xe9s",i={id:"java/java-11-17/index",title:"De Java 11 \xe0 Java 17, les nouveaut\xe9s",description:"Fiche technique et aide-m\xe9moire pour d\xe9veloppeur sur les nouveaut\xe9s de Java 11 \xe0 Java 17",source:"@site/devento/java/java-11-17/index.md",sourceDirName:"java/java-11-17",slug:"/java/java-11-17/",permalink:"/devento/java/java-11-17/",draft:!1,unlisted:!1,tags:[{inline:!0,label:"java",permalink:"/devento/tags/java"},{inline:!0,label:"langage",permalink:"/devento/tags/langage"},{inline:!0,label:"d\xe9veloppement",permalink:"/devento/tags/developpement"}],version:"current",lastUpdatedAt:1654992e6,frontMatter:{last_update:{date:"06/12/2022"},tags:["java","langage","d\xe9veloppement"],keywords:["devento","aide-m\xe9moire","fiche technique"],description:"Fiche technique et aide-m\xe9moire pour d\xe9veloppeur sur les nouveaut\xe9s de Java 11 \xe0 Java 17"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/devento/"},next:{title:"Les casses, ou case, en programmation.",permalink:"/devento/transverse/cases/"}},c={},o=[{value:"Apprendre les nouveaut\xe9s de Java 11 \xe0 Java 17",id:"apprendre-les-nouveaut\xe9s-de-java-11-\xe0-java-17",level:2},{value:"La fiche technique",id:"la-fiche-technique",level:2},{value:"Switch Case",id:"switch-case",level:3},{value:"Class modifier",id:"class-modifier",level:3},{value:"Formatage",id:"formatage",level:3},{value:"Divers",id:"divers",level:3},{value:"Ressources",id:"ressources",level:2},{value:"Fiches \xe0 t\xe9l\xe9charger",id:"fiches-\xe0-t\xe9l\xe9charger",level:3},{value:"Sources",id:"sources",level:3},{value:"Auteurs",id:"auteurs",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"de-java-11-\xe0-java-17-les-nouveaut\xe9s",children:"De Java 11 \xe0 Java 17, les nouveaut\xe9s"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Tu vas avoir toutes les modifications qui vont te changer la vie de tous les jours sous les yeux en une seule fois\xa0!"})}),"\n",(0,s.jsx)(n.h2,{id:"apprendre-les-nouveaut\xe9s-de-java-11-\xe0-java-17",children:"Apprendre les nouveaut\xe9s de Java 11 \xe0 Java 17"}),"\n",(0,s.jsx)(n.p,{children:"Pourquoi une fiche sur les nouveaut\xe9s de Java 11 \xe0 Java 17\xa0? Parce que c'est une p\xe9riode de transition pour beaucoup de d\xe9veloppeurs."}),"\n",(0,s.jsxs)(n.p,{children:["En effet, les chiffres changent, mais les faits restent.\nEn 2022, \xe0 la publication de cette fiche, ",(0,s.jsx)(n.a,{href:"https://fr.wikipedia.org/wiki/New_Relic",children:"New Relic"})," publiait un ",(0,s.jsx)(n.a,{href:"https://newrelic.com/fr/resources/report/2022-state-of-java-ecosystem#toc-java-11-est-la-nouvelle-norme",children:"rapport"})," sur l'usage de Java\xa0:"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"center"}}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"Java 8"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"Java 11"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"2020"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"84,48 %"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"11,11%"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"2022"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"46,45 %"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"48%"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["Comme ",(0,s.jsx)(n.a,{href:"https://fr.wikipedia.org/wiki/Java_(langage)#Java_SE_17_(LTS)",children:"Java 17"})," est la nouvelle version ",(0,s.jsx)(n.a,{href:"https://fr.wikipedia.org/wiki/Long-term_support",children:"LTS"})," de Java, il y a fort \xe0 parier que les migrations seront nombreuses.\nDe plus, les versions 12 \xe0 16 sont assez peu utilis\xe9es. J'ai d\xe9cid\xe9 de faire le grand \xe9cart, comme beaucoup et de passer de la 11 \xe0 la 17. Oui, cette fiche servira donc au moins \xe0 une personne\xa0!"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"La version 17 ne sera rapidement plus la derni\xe8re version LTS, mais les nouveaut\xe9s de Java 17 sont toujours d'actualit\xe9. De plus, sa p\xe9riode de maintenance court jusqu'en 2026 et son support \xe9tendu jusqu'en 2029."})}),"\n",(0,s.jsx)(n.p,{children:"De plus comme les nouveaut\xe9s pr\xe9sent\xe9es ici ne sont que des am\xe9liorations de syntaxe ou des ajouts de fonctionnalit\xe9s mineures, elles sont souvent ignor\xe9es par les d\xe9veloppeurs. Pourtant, elles peuvent te changer la vie de tous les jours."}),"\n",(0,s.jsx)(n.h2,{id:"la-fiche-technique",children:"La fiche technique"}),"\n",(0,s.jsx)(n.h3,{id:"switch-case",children:"Switch Case"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"Tu peux cumuler toutes ces fonctionnalit\xe9s entre elles\xa0!"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"case"})," multiple avec un s\xe9parateur ",(0,s.jsx)(n.code,{children:","})," ",(0,s.jsx)(n.a,{href:"https://www.oracle.com/java/technologies/javase/14all-relnotes.html#NewFeature",children:"@since Java 14"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'switch (i) {\n  case 1, 2, 3 :\n    System.out.println("Value is " + i);\n    break;\n  default :\n    throw new IllegalArgumentException("Number is not supported");\n}\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"->"})," remplace ",(0,s.jsx)(n.code,{children:":"})," et \xe9vite le ",(0,s.jsx)(n.code,{children:"break"})," ",(0,s.jsx)(n.a,{href:"https://www.oracle.com/java/technologies/javase/12all-relnotes.html#NewFeature",children:"@since Java 12"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'switch (i) {\n  case 1, 2, 3 -> System.out.println("Value is " + i);\n  default      -> throw new IllegalArgumentException("Number is not supported");\n}\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"->"})," peut \xeatre utilis\xe9 pour renvoyer une valeur ",(0,s.jsx)(n.a,{href:"https://www.oracle.com/java/technologies/javase/14all-relnotes.html#NewFeature",children:"@since Java 14"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'String vehicleType = switch (wheelNumber) {\n  case 2  -> "bicycle";\n  case 4  -> "car";\n  default -> "Unknown vehicle";\n};\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"->"})," switch sur le type pour ",(0,s.jsx)(n.em,{children:"caster"})," \xe0 la vol\xe9e ",(0,s.jsx)(n.a,{href:"https://www.oracle.com/java/technologies/javase/17all-relnotes.html#NewFeature",children:"@since Java 17 preview"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'static String getType(Object o) {\n  return switch (o) {\n    case Integer i -> String.format("%d is an integer", i);\n    case Long l    -> String.format("%d is a big integer!", l);\n    case Double d  -> String.format("%f is a decimal number!", d);\n    case String s  -> String.format("%s is a String!", s);\n    default        -> "Unknown type";\n  };\n}\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["gestion du ",(0,s.jsx)(n.code,{children:"null"})," ",(0,s.jsx)(n.a,{href:"https://www.oracle.com/java/technologies/javase/17all-relnotes.html#NewFeature",children:"@since Java 17 preview"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'switch (o) {\n  case null  -> String.format("%d is an integer", i);\n  case "you" -> System.out.println("pi !");\n  case "hou" -> System.out.println("rra !");\n  default    -> System.out.println("ouin...");\n};\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"yield"})," pour renvoyer une valeur dans le switch sur le type ",(0,s.jsx)(n.a,{href:"https://www.oracle.com/java/technologies/javase/17all-relnotes.html#NewFeature",children:"@since Java 17 preview"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'static void toBool(int i) {\n  Boolean b =  switch (i) {\n    case 0 -> {\n      System.out.println("c\'est rien");\n      yield false;\n    }\n    case 1 -> {\n      System.out.println("c\'est le d\xe9but");\n      yield true;\n    }\n    default -> {\n      System.out.println("ce n\'est pas possible");\n      yield null;\n    }\n  };\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"class-modifier",children:"Class modifier"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"record"})," : nouveau type de class : immutable et g\xe9n\xe8re ",(0,s.jsx)(n.code,{children:"getter/hashCode/equals"})," ",(0,s.jsx)(n.a,{href:"https://www.oracle.com/java/technologies/javase/14all-relnotes.html#NewFeature",children:"@since Java 14"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"record ColorRecord(int red, int green, int blue) {};\nColorRecord color = new ColorRecord(255, 10, 10);\ncolor.red();\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"sealed"})," : afin de verrouiller les possibilit\xe9s d'h\xe9ritage ",(0,s.jsx)(n.a,{href:"https://www.oracle.com/java/technologies/javase/16all-relnotes.html#NewFeature",children:"@since Java 16"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"abstract sealed class Person permits Employee, Boss {\n  String name;\n}\nfinal class Employee extends Person {\n  int id;\n  int getEmployeeId() {\n    return id;\n  }\n}\nfinal class Boss extends Person { }\n\n// Va g\xe9n\xe9rer une erreur \xe0 la compilation\nfinal class Customer extends Person { }\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"formatage",children:"Formatage"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"NumberFormat"})," : ajout d'un formatage ",(0,s.jsx)(n.code,{children:"SHORT"})," : 10k, 1M, etc. ",(0,s.jsx)(n.a,{href:"https://www.oracle.com/java/technologies/javase/12all-relnotes.html#NewFeature",children:"@since Java 12"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"NumberFormat.getCompactNumberInstance(Locale.FRANCE, NumberFormat.Style.SHORT);\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"NumberFormat"})," : ajout d'un formatage ",(0,s.jsx)(n.code,{children:"LONG"}),"; avec ",(0,s.jsx)(n.code,{children:"Locale"})," : 1 million, 2 mille, etc. ",(0,s.jsx)(n.a,{href:"https://www.oracle.com/java/technologies/javase/14all-relnotes.html#NewFeature",children:"@since Java 14"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"NumberFormat.getCompactNumberInstance(Locale.FRANCE, NumberFormat.Style.LONG);\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"NumberFormat"})," : ajout d\u2019un formatage monnaie, avec ",(0,s.jsx)(n.code,{children:"Locale"})," : $3.24, 5,61\u20ac, etc. ",(0,s.jsx)(n.a,{href:"https://www.oracle.com/java/technologies/javase/14all-relnotes.html#NewFeature",children:"@since Java 14"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"NumberFormat.getCurrencyInstance(Locale.FRANCE)\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"DateTimeFormatter"})," : ajout du cycle, avec ",(0,s.jsx)(n.code,{children:"Locale"})," : du matin, de l'apr\xe8s-midi, etc. ",(0,s.jsx)(n.a,{href:"https://www.oracle.com/java/technologies/javase/16all-relnotes.html#NewFeature",children:"@since Java 16"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'DateTimeFormatter.ofPattern("B", Locale.FRANCE)\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"divers",children:"Divers"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"String"})," : bloc String multiligne avec ",(0,s.jsx)(n.code,{children:'"""'})," ",(0,s.jsx)(n.a,{href:"https://www.oracle.com/java/technologies/javase/13all-relnotes.html#NewFeature",children:"@since Java 13"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'// pour le m\xeame rendu :\nString withoutMultiline = "{\\n" +\n    "  \\"id\\":213,\\n" +\n    "  \\"name\\":\\"Nathaniel\\"\\n" +\n    "}";\nString withMultiline = """\n    {\n      "id":213,\n      "name":"Nathaniel"\n    }""";\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Exception"})," : meilleur message de debug sur les ",(0,s.jsx)(n.code,{children:"Exception"}),", en particulier les ",(0,s.jsx)(n.code,{children:"NullpointerException"})," ",(0,s.jsx)(n.a,{href:"https://www.oracle.com/java/technologies/javase/17all-relnotes.html#NewFeature",children:"@since Java 17"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'String s = null;\nSystem.out.println(s.toLowerCase());\n// => Exception in thread "main" java.lang.NullPointerException: Cannot invoke "String.toLowerCase()" because "s" is null\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"instanceof"})," : peut \xeatre suivi d'un nom de variable afin de caster imm\xe9diatement ",(0,s.jsx)(n.a,{href:"https://www.oracle.com/java/technologies/javase/16all-relnotes.html#NewFeature",children:"@since Java 16"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"Person p = new Employee();\nif (p instanceof Employee employee){\n    System.out.println(employee.getEmployeeId());\n}\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Stream.toList"})," : afin d\u2019\xe9viter de passer par un ",(0,s.jsx)(n.code,{children:".collect(Collectors.toList())"})," ",(0,s.jsx)(n.a,{href:"https://www.oracle.com/java/technologies/javase/16all-relnotes.html#NewFeature",children:"@since Java 16"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'// avant\nList.of("some","thing").stream().collect(Collectors.toList());\n// maintenant\nList.of("some","thing").stream().toList();\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"ressources",children:"Ressources"}),"\n",(0,s.jsx)(n.h3,{id:"fiches-\xe0-t\xe9l\xe9charger",children:"Fiches \xe0 t\xe9l\xe9charger"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:a(2217).A+"",children:"pdf"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:a(7610).A+"",children:"md"})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"sources",children:"Sources"}),"\n",(0,s.jsxs)(n.p,{children:["Comme indiqu\xe9 au fur et \xe0 mesure, les ",(0,s.jsx)(n.a,{href:"https://www.oracle.com/java/technologies/java-se-glance.html",children:"Release Notes"})," des diff\xe9rentes versions de Java."]}),"\n",(0,s.jsx)(n.h3,{id:"auteurs",children:"Auteurs"}),"\n",(0,s.jsx)(n.p,{children:"Nathaniel Vaur Henel"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.em,{children:["Cette fiche a \xe9t\xe9 publi\xe9e en premier sur ",(0,s.jsx)(n.a,{href:"https://nathaniel-vaur-henel.github.io/",children:"https://nathaniel-vaur-henel.github.io/"})," par Nathaniel Vaur Henel sous licence ",(0,s.jsx)(n.a,{href:"https://creativecommons.org/licenses/by/4.0/",children:"Attribution 4.0 International"})]})})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},7610:(e,n,a)=>{a.d(n,{A:()=>s});const s=a.p+"assets/files/java11_17_aide-m\xe9moire-0ce3704232ec4ff5ffee2fecad2c8e8a.markdown"},2217:(e,n,a)=>{a.d(n,{A:()=>s});const s=a.p+"assets/files/java11_17_aide-m\xe9moire-38c152b40da8fba080e0cd74848c319d.pdf"},8453:(e,n,a)=>{a.d(n,{R:()=>r,x:()=>i});var s=a(6540);const l={},t=s.createContext(l);function r(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);