	var cnv=document.querySelector("canvas"),
	ctx=cnv.getContext("2d"),
	WIDTH=document.querySelector("canvas").width,
	HEIGHT=document.querySelector("canvas").height;

	//Algoritmo "Pokepobre 0.4"
	//
	//
	// Melhor jogo de 2022
	// Muito bão
	
	var pkdx=[
	{n:"Juan",ev:1,nqe:16,el:"Planta",rar:3,desv:1,pr:1,atk:30,atkesp:16,def:26,defesp:19,hp:11,spd:8,
	aprende:[
	{nivel:1,nome:"Coice",cat:"Fisico",el:"Normal",pp:35,pr:100,pwr:40},
	{nivel:2,nome:"Reincho",cat:"Stats",el:1,pp:35,pr:100,pwr:10},
	{nivel:3,nome:"Chuva de folhas",cat:"Especial",el:"Planta",pp:25,pr:100,pwr:45}
	]
	},
	
	{n:"Don Juan",ev:2,nqe:36,el:"Planta",rar:3,desv:1,pr:1,atk:40,atkesp:31,def:36,defesp:34,hp:36,spd:23,
	aprende:[
	
	]
	},
	
	{n:"Giga Juan",ev:3,el:"Planta",el2:"Terra",rar:3,desv:1,pr:1,atk:65,atkesp:56,def:61,defesp:59,hp:61,spd:48,
	aprende:[
	
	]
	},
	
	
	
	
	{n:"Pingu",ev:1,nqe:16,el:"Água",rar:3,desv:1,pr:1,atk:22,atkesp:31,def:0,defesp:20,hp:26,spd:11,
	aprende:[
	{nivel:1,nome:"Tapa",cat:"Fisico",el:"Normal",pp:35,pr:100,pwr:40},
	{nivel:2,nome:"Revólver d'água",cat:"Especial",el:"Água",pp:25,pr:100,pwr:40}
	]
	},
	
	{n:"Zé gotinha",ev:2,nqe:36,el:"Água",rar:3,desv:1,pr:1,atk:37,atkesp:41,def:15,defesp:30,hp:46,spd:31,
	aprende:[
	
	]
	},
	
	{n:"Xaolin tempestade",ev:3,el:"Água",el2:"Gelo",rar:3,desv:1,pr:1,atk:57,atkesp:66,def:45,defesp:55,hp:66,spd:61,
	aprende:[
	
	]
	},
	
	
	
	
	
	{n:"Barriguinha mole",ev:1,nqe:16,el:"Fogo",rar:3,desv:1,pr:1,atk:23,atkesp:13,def:9,defesp:18,hp:16,spd:31,
	aprende:[
	{nivel:1,nome:"Murro",cat:"Fisico",el:"Normal",pp:35,pr:100,pwr:40},
	{nivel:2,nome:"Bola de fogo",cat:"Especial",el:"Fogo",pp:25,pr:100,pwr:40}
	]
	},
	
	{n:"Barriguinha chapada",ev:2,nqe:36,el:"Fogo",rar:3,desv:1,pr:1,atk:33,atkesp:33,def:16,defesp:33,hp:36,spd:46,
	aprende:[
	
	]
	},
	
	{n:"Barriguinha tanquinho",ev:3,el:"Fogo",el2:"Lutador",rar:3,desv:1,pr:1,atk:53,atkesp:63,def:49,defesp:58,hp:56,spd:71,
	aprende:[
	
	]
	}
	
	];
	
	function morreu(){		
		document.body.querySelector('p#batleit').hidden=true;
		opbat=0;
		if(p.atual.hp[0]>0){
			opbat=opbat+p.atual.hp[0];
		}else if(p.atual.hp[1]>0){
			opbat=opbat+p.atual.hp[1];
		}else if(p.atual.hp[2]>0){
			opbat=opbat+p.atual.hp[2];
		}else if(p.atual.hp[3]>0){
			opbat=opbat+p.atual.hp[3];
		}else if(p.atual.hp[4]>0){
			opbat=opbat+p.atual.hp[4];
		}else if(p.atual.hp[5]>0){
			opbat=opbat+p.atual.hp[5];
		}
		if(opbat>0){
			gambiarra3=true;
			document.body.querySelector('p#batop').hidden= false;
			document.body.querySelector('p#batleitmorte').hidden=true;
			document.body.querySelector('p#op0').innerText="(0)";
			KOROI=document.getElementById("op0");
			TROXO=document.createTextNode(p.atual.nome[0]+"-");
			KOROI.append(TROXO);
			TROXO=document.createTextNode(p.atual.hp[0]);
			KOROI.append(TROXO);
			TROXO=document.createTextNode("/");
			KOROI.append(TROXO);
			TROXO=document.createTextNode(p.perm.hp[0]);
			KOROI.append(TROXO);
			if(p.atual.nome[1]!=undefined){
				document.body.querySelector('p#op1').innerText="(1)";
				KOROI=document.getElementById("op1");
				TROXO=document.createTextNode(p.atual.nome[1]+"-");
				KOROI.append(TROXO);
				TROXO=document.createTextNode(p.atual.hp[1]);
				KOROI.append(TROXO);
				TROXO=document.createTextNode("/");
				KOROI.append(TROXO);
				TROXO=document.createTextNode(p.perm.hp[1]);
				KOROI.append(TROXO);
			}
			if(p.atual.nome[2]!=undefined){
				document.body.querySelector('p#op2').innerText="(2)";
				KOROI=document.getElementById("op2");
				TROXO=document.createTextNode(p.atual.nome[2]+"-");
				KOROI.append(TROXO);
				TROXO=document.createTextNode(p.atual.hp[2]);
				KOROI.append(TROXO);
				TROXO=document.createTextNode("/");
				KOROI.append(TROXO);
				TROXO=document.createTextNode(p.perm.hp[2]);
				KOROI.append(TROXO);
			}
			if(p.atual.nome[3]!=undefined){
				document.body.querySelector('p#op3').innerText="(3)";
				KOROI=document.getElementById("op3");
				TROXO=document.createTextNode(p.atual.nome[3]+"-");
				KOROI.append(TROXO);
				TROXO=document.createTextNode(p.atual.hp[3]);
				KOROI.append(TROXO);
				TROXO=document.createTextNode("/");
				KOROI.append(TROXO);
				TROXO=document.createTextNode(p.perm.hp[3]);
				KOROI.append(TROXO);
			}
			if(p.atual.nome[4]!=undefined){
				document.body.querySelector('p#op4').innerText="(4)";
				KOROI=document.getElementById("op4");
				TROXO=document.createTextNode(p.atual.nome[4]+"-");
				KOROI.append(TROXO);
				TROXO=document.createTextNode(p.atual.hp[4]);
				KOROI.append(TROXO);
				TROXO=document.createTextNode("/");
				KOROI.append(TROXO);
				TROXO=document.createTextNode(p.perm.hp[4]);
				KOROI.append(TROXO);
			}
			if(p.atual.nome[5]!=undefined){
				document.body.querySelector('p#op5').innerText="(5)";
				KOROI=document.getElementById("op5");
				TROXO=document.createTextNode(p.atual.nome[5]+"-");
				KOROI.append(TROXO);
				TROXO=document.createTextNode(p.atual.hp[5]);
				KOROI.append(TROXO);
				TROXO=document.createTextNode("/");
				KOROI.append(TROXO);
				TROXO=document.createTextNode(p.perm.hp[5]);
				KOROI.append(TROXO);
			}						
			document.body.querySelector('p#op0').hidden=false;
			document.body.querySelector('p#op1').hidden=false;
			document.body.querySelector('p#op2').hidden=false;
			document.body.querySelector('p#op3').hidden=false;
			document.body.querySelector('p#op4').hidden=false;
			document.body.querySelector('p#op5').hidden=false;
			opbat=undefined;
		}else{
			voce=estado.andando;
			lug=1;
			op=0;
			passagem();
			cura();
			document.body.querySelector('p#batleitmorte').hidden=true;
			document.body.querySelector('p#bat').hidden= true;
			document.body.querySelector('p#batop').hidden= true;
			document.body.querySelector('p#batni').hidden= true;
			document.body.querySelector('p#enter').hidden=true;
			document.body.querySelector('p#mapa').hidden=true;
			document.body.querySelector('p#andando').hidden=true;
			document.body.querySelector('p#cm').hidden=false;
		}
	}
	function matou(){
		voce=estado.andando;
		document.getElementById("xp").innerText="XP ganho:";
		KOROI=document.getElementById("xp");
		TROXO = document.createTextNode(16*i.atual.nivel[indi]);
		KOROI.append(TROXO);
		document.body.querySelector('p#xp').hidden=false;	
		gambiarra1=4.1;
		time=setTimeout(sn,2000);
		passagem();
	}
	function chegadexp(){		
		document.body.querySelector('p#batleit').hidden=true;
		document.body.querySelector('p#batleitmorte').hidden=true;
		document.body.querySelector('p#bat').hidden= true;
		document.body.querySelector('p#enter').hidden= true;
		document.body.querySelector('p#batop').hidden= true;
		document.body.querySelector('p#batni').hidden= true;
		document.body.querySelector('p#andando').hidden= false;
		document.body.querySelector('p#mapa').hidden= false;
		document.body.querySelector('p#xp').hidden=true;
		document.body.querySelector('p#xpatk').hidden=true;			
		document.body.querySelector('p#xpatkesp').hidden=true;			
		document.body.querySelector('p#xpdef').hidden=true;			
		document.body.querySelector('p#xpdefesp').hidden=true;			
		document.body.querySelector('p#xphp').hidden=true;			
		document.body.querySelector('p#xpspd').hidden=true;			
		document.body.querySelector('p#aprende').hidden=true;
		document.body.querySelector('p#aprendido').hidden=true;
	}
	function aprender(){
		if(pkdx[p.perm.id[ind]].aprende[p.perm.nda[ind]]!=undefined){
			if(p.atual.nivel==pkdx[p.perm.id[ind]].aprende[p.perm.nda[ind]].nivel){
				
				if(p.perm.atk1.nome[ind]==undefined){
					p.perm.atk1.nome[ind]=pkdx[p.perm.id[ind]].aprende[p.perm.nda[ind]].nome;
					p.perm.atk1.cat[ind]=pkdx[p.perm.id[ind]].aprende[p.perm.nda[ind]].cat;
					p.perm.atk1.el[ind]=pkdx[p.perm.id[ind]].aprende[p.perm.nda[ind]].el;
					p.perm.atk1.pp[ind]=pkdx[p.perm.id[ind]].aprende[p.perm.nda[ind]].pp;
					p.perm.atk1.pr[ind]=pkdx[p.perm.id[ind]].aprende[p.perm.nda[ind]].pr;
					p.perm.atk1.pwr[ind]=pkdx[p.perm.id[ind]].aprende[p.perm.nda[ind]].pwr;
					if(gambiarra2){
						document.body.querySelector('p#aprende').innerText=p.atual.nome[ind];
						KOROI=document.getElementById("aprende");
						TROXO = document.createTextNode(" aprendeu: ");
						KOROI.append(TROXO);
						TROXO = document.createTextNode(p.perm.atk1.nome[ind]);
						KOROI.append(TROXO);
						document.body.querySelector('p#aprende').hidden=false;
						gambiarra1=4.3;
					}
					p.perm.nda[ind]++;
				}else if(p.perm.atk2.nome[ind]==undefined){
					document.body.querySelector('p#xp').hidden=true;
					document.body.querySelector('p#xpatk').hidden=true;			
					document.body.querySelector('p#xpatkesp').hidden=true;			
					document.body.querySelector('p#xpdef').hidden=true;			
					document.body.querySelector('p#xpdefesp').hidden=true;			
					document.body.querySelector('p#xphp').hidden=true;			
					document.body.querySelector('p#xpspd').hidden=true;
					p.perm.atk2.nome[ind]=pkdx[p.perm.id[ind]].aprende[p.perm.nda[ind]].nome;
					p.perm.atk2.cat[ind]=pkdx[p.perm.id[ind]].aprende[p.perm.nda[ind]].cat;
					p.perm.atk2.el[ind]=pkdx[p.perm.id[ind]].aprende[p.perm.nda[ind]].el;
					p.perm.atk2.pp[ind]=pkdx[p.perm.id[ind]].aprende[p.perm.nda[ind]].pp;
					p.perm.atk2.pr[ind]=pkdx[p.perm.id[ind]].aprende[p.perm.nda[ind]].pr;
					p.perm.atk2.pwr[ind]=pkdx[p.perm.id[ind]].aprende[p.perm.nda[ind]].pwr;
					p.perm.nda[ind]++;
					if(gambiarra2){					
						document.body.querySelector('p#aprende').innerText=p.atual.nome[ind];
						KOROI=document.getElementById("aprende");
						TROXO = document.createTextNode(" aprendeu: ");
						KOROI.append(TROXO);
						TROXO = document.createTextNode(p.perm.atk2.nome[ind]);
						KOROI.append(TROXO);
						document.body.querySelector('p#aprende').hidden=false;
						gambiarra1=4.3;
					}
					
				}else if(p.perm.atk3.nome[ind]==undefined){					
					document.body.querySelector('p#aprende').hidden=false;
					document.body.querySelector('p#xp').hidden=true;
					document.body.querySelector('p#xpatk').hidden=true;			
					document.body.querySelector('p#xpatkesp').hidden=true;			
					document.body.querySelector('p#xpdef').hidden=true;			
					document.body.querySelector('p#xpdefesp').hidden=true;			
					document.body.querySelector('p#xphp').hidden=true;			
					document.body.querySelector('p#xpspd').hidden=true;
					p.perm.atk3.nome[ind]=pkdx[p.perm.id[ind]].aprende[p.perm.nda[ind]].nome;
					p.perm.atk3.cat[ind]=pkdx[p.perm.id[ind]].aprende[p.perm.nda[ind]].cat;
					p.perm.atk3.el[ind]=pkdx[p.perm.id[ind]].aprende[p.perm.nda[ind]].el;
					p.perm.atk3.pp[ind]=pkdx[p.perm.id[ind]].aprende[p.perm.nda[ind]].pp;
					p.perm.atk3.pr[ind]=pkdx[p.perm.id[ind]].aprende[p.perm.nda[ind]].pr;
					p.perm.atk3.pwr[ind]=pkdx[p.perm.id[ind]].aprende[p.perm.nda[ind]].pwr;
					p.perm.nda[ind]++;
					if(gambiarra2){
						document.body.querySelector('p#aprende').innerText=p.atual.nome[ind];
						KOROI=document.getElementById("aprende");
						TROXO = document.createTextNode(" aprendeu: ");
						KOROI.append(TROXO);
						TROXO = document.createTextNode(p.perm.atk3.nome[ind]);
						KOROI.append(TROXO);				
						gambiarra1=4.3;
					}					
				}else if(p.perm.atk4.nome[ind]==undefined){
					document.body.querySelector('p#aprende').hidden=false;
					document.body.querySelector('p#xp').hidden=true;
					document.body.querySelector('p#xpatk').hidden=true;			
					document.body.querySelector('p#xpatkesp').hidden=true;			
					document.body.querySelector('p#xpdef').hidden=true;			
					document.body.querySelector('p#xpdefesp').hidden=true;			
					document.body.querySelector('p#xphp').hidden=true;			
					document.body.querySelector('p#xpspd').hidden=true;
					p.perm.atk4.nome[ind]=pkdx[p.perm.id[ind]].aprende[p.perm.nda[ind]].nome;
					p.perm.atk4.cat[ind]=pkdx[p.perm.id[ind]].aprende[p.perm.nda[ind]].cat;
					p.perm.atk4.el[ind]=pkdx[p.perm.id[ind]].aprende[p.perm.nda[ind]].el;
					p.perm.atk4.pp[ind]=pkdx[p.perm.id[ind]].aprende[p.perm.nda[ind]].pp;
					p.perm.atk4.pr[ind]=pkdx[p.perm.id[ind]].aprende[p.perm.nda[ind]].pr;
					p.perm.atk4.pwr[ind]=pkdx[p.perm.id[ind]].aprende[p.perm.nda[ind]].pwr;
					p.perm.nda[ind]++;
					if(gambiarra2){
						document.body.querySelector('p#aprende').innerText=p.atual.nome[ind];
						KOROI=document.getElementById("aprende");
						TROXO = document.createTextNode(" aprendeu: ");
						KOROI.append(TROXO);
						TROXO = document.createTextNode(p.perm.atk4.nome[ind]);
						KOROI.append(TROXO);
						document.body.querySelector('p#aprende').hidden=false;
						gambiarra1=4.3;
					}					
				}else{
					document.body.querySelector('p#xp').hidden=true;
					document.body.querySelector('p#xpatk').hidden=true;			
					document.body.querySelector('p#xpatkesp').hidden=true;			
					document.body.querySelector('p#xpdef').hidden=true;			
					document.body.querySelector('p#xpdefesp').hidden=true;			
					document.body.querySelector('p#xphp').hidden=true;			
					document.body.querySelector('p#xpspd').hidden=true;
					document.body.querySelector('p#batleit').hidden=true;
					document.body.querySelector('p#aprendido').innerText="(<-)";
					KOROI=document.getElementById("aprendido");
					TROXO = document.createTextNode(p.perm.atk1.nome[ind]);
					KOROI.append(TROXO);
					TROXO = document.createTextNode("(->)");
					KOROI.append(TROXO);
					TROXO = document.createTextNode(p.perm.atk2.nome[ind]);
					KOROI.append(TROXO);
					TROXO = document.createTextNode("(î)");
					KOROI.append(TROXO);
					TROXO = document.createTextNode(p.perm.atk3.nome[ind]);
					KOROI.append(TROXO);
					TROXO = document.createTextNode("(!)");
					KOROI.append(TROXO);
					TROXO = document.createTextNode(p.perm.atk4.nome[ind]);
					KOROI.append(TROXO);					
					document.body.querySelector('p#aprende').innerText=p.atual.nome[ind];
					KOROI=document.getElementById("aprende");
					TROXO = document.createTextNode(" quer aprender: ");
					KOROI.append(TROXO);
					TROXO = document.createTextNode(pkdx[p.perm.id[ind]].aprende[p.perm.nda[ind]].nome);
					KOROI.append(TROXO);
					document.body.querySelector('p#aprendido').hidden=false;
					document.body.querySelector('p#aprende').hidden=false;
					gambiarra1=4.3;
				}
			}else{
				chegadexp();
			}
		}else{
			chegadexp();
		}
		passagem();	
	}
	function iaprender(c){
		if(c==pkdx[i.perm.id[indi]].nqe){
			i.perm.id[indi]=i.perm.id[indi]+1;
			ipassagem();
		}
		if(pkdx[i.perm.id[indi]].aprende[i.perm.nda[indi]]!=undefined){
			if(c==pkdx[i.perm.id[indi]].aprende[i.perm.nda[indi]].nivel){			
				if(i.perm.atk1.nome[indi]==undefined){
					i.perm.atk1.nome[indi]=pkdx[i.perm.id[indi]].aprende[i.perm.nda[indi]].nome;
					i.perm.atk1.cat[indi]=pkdx[i.perm.id[indi]].aprende[i.perm.nda[indi]].cat;
					i.perm.atk1.el[indi]=pkdx[i.perm.id[indi]].aprende[i.perm.nda[indi]].el;
					i.perm.atk1.pp[indi]=pkdx[i.perm.id[indi]].aprende[i.perm.nda[indi]].pp;
					i.perm.atk1.pr[indi]=pkdx[i.perm.id[indi]].aprende[i.perm.nda[indi]].pr;
					i.perm.atk1.pwr[indi]=pkdx[i.perm.id[indi]].aprende[i.perm.nda[indi]].pwr;
					i.perm.nda[indi]++;
				}else if(i.perm.atk2.nome[indi]==undefined){
					i.perm.atk2.nome[indi]=pkdx[i.perm.id[indi]].aprende[i.perm.nda[indi]].nome;
					i.perm.atk2.cat[indi]=pkdx[i.perm.id[indi]].aprende[i.perm.nda[indi]].cat;
					i.perm.atk2.el[indi]=pkdx[i.perm.id[indi]].aprende[i.perm.nda[indi]].el;
					i.perm.atk2.pp[indi]=pkdx[i.perm.id[indi]].aprende[i.perm.nda[indi]].pp;
					i.perm.atk2.pr[indi]=pkdx[i.perm.id[indi]].aprende[i.perm.nda[indi]].pr;
					i.perm.atk2.pwr[indi]=pkdx[i.perm.id[indi]].aprende[i.perm.nda[indi]].pwr;
					i.perm.nda[indi]++;					
				}else if(i.perm.atk3.nome[indi]==undefined){
					i.perm.atk3.nome[indi]=pkdx[i.perm.id[indi]].aprende[i.perm.nda[indi]].nome;
					i.perm.atk3.cat[indi]=pkdx[i.perm.id[indi]].aprende[i.perm.nda[indi]].cat;
					i.perm.atk3.el[indi]=pkdx[i.perm.id[indi]].aprende[i.perm.nda[indi]].el;
					i.perm.atk3.pp[indi]=pkdx[i.perm.id[indi]].aprende[i.perm.nda[indi]].pp;
					i.perm.atk3.pr[indi]=pkdx[i.perm.id[indi]].aprende[i.perm.nda[indi]].pr;
					i.perm.atk3.pwr[indi]=pkdx[i.perm.id[indi]].aprende[i.perm.nda[indi]].pwr;
					i.perm.nda[indi]++;				
				}else if(i.perm.atk4.nome[indi]==undefined){
					i.perm.atk4.nome[indi]=pkdx[i.perm.id[indi]].aprende[i.perm.nda[indi]].nome;
					i.perm.atk4.cat[indi]=pkdx[i.perm.id[indi]].aprende[i.perm.nda[indi]].cat;
					i.perm.atk4.el[indi]=pkdx[i.perm.id[indi]].aprende[i.perm.nda[indi]].el;
					i.perm.atk4.pp[indi]=pkdx[i.perm.id[indi]].aprende[i.perm.nda[indi]].pp;
					i.perm.atk4.pr[indi]=pkdx[i.perm.id[indi]].aprende[i.perm.nda[indi]].pr;
					i.perm.atk4.pwr[indi]=pkdx[i.perm.id[indi]].aprende[i.perm.nda[indi]].pwr;
					i.perm.nda[indi]++;							
				}else{
					cap=Math.floor(5*Math.random());
					if(cap==1){
						i.perm.atk1.nome[indi]=pkdx[i.perm.id[indi]].aprende[i.perm.nda[indi]].nome;
						i.perm.atk1.cat[indi]=pkdx[i.perm.id[indi]].aprende[i.perm.nda[indi]].cat;
						i.perm.atk1.el[indi]=pkdx[i.perm.id[indi]].aprende[i.perm.nda[indi]].el;
						i.perm.atk1.pp[indi]=pkdx[i.perm.id[indi]].aprende[i.perm.nda[indi]].pp;
						i.perm.atk1.pr[indi]=pkdx[i.perm.id[indi]].aprende[i.perm.nda[indi]].pr;
						i.perm.atk1.pwr[indi]=pkdx[i.perm.id[indi]].aprende[i.perm.nda[indi]].pwr;
						i.perm.nda[indi]++;
					}else if(cap==2){
						i.perm.atk2.nome[indi]=pkdx[i.perm.id[indi]].aprende[i.perm.nda[indi]].nome;
						i.perm.atk2.cat[indi]=pkdx[i.perm.id[indi]].aprende[i.perm.nda[indi]].cat;
						i.perm.atk2.el[indi]=pkdx[i.perm.id[indi]].aprende[i.perm.nda[indi]].el;
						i.perm.atk2.pp[indi]=pkdx[i.perm.id[indi]].aprende[i.perm.nda[indi]].pp;
						i.perm.atk2.pr[indi]=pkdx[i.perm.id[indi]].aprende[i.perm.nda[indi]].pr;
						i.perm.atk2.pwr[indi]=pkdx[i.perm.id[indi]].aprende[i.perm.nda[indi]].pwr;
						i.perm.nda[indi]++;
					}else if(cap==3){
						i.perm.atk3.nome[indi]=pkdx[i.perm.id[indi]].aprende[i.perm.nda[indi]].nome;
						i.perm.atk3.cat[indi]=pkdx[i.perm.id[indi]].aprende[i.perm.nda[indi]].cat;
						i.perm.atk3.el[indi]=pkdx[i.perm.id[indi]].aprende[i.perm.nda[indi]].el;
						i.perm.atk3.pp[indi]=pkdx[i.perm.id[indi]].aprende[i.perm.nda[indi]].pp;
						i.perm.atk3.pr[indi]=pkdx[i.perm.id[indi]].aprende[i.perm.nda[indi]].pr;
						i.perm.atk3.pwr[indi]=pkdx[i.perm.id[indi]].aprende[i.perm.nda[indi]].pwr;
						i.perm.nda[indi]++;
					}else if(cap==4){
						i.perm.atk4.nome[indi]=pkdx[i.perm.id[indi]].aprende[i.perm.nda[indi]].nome;
						i.perm.atk4.cat[indi]=pkdx[i.perm.id[indi]].aprende[i.perm.nda[indi]].cat;
						i.perm.atk4.el[indi]=pkdx[i.perm.id[indi]].aprende[i.perm.nda[indi]].el;
						i.perm.atk4.pp[indi]=pkdx[i.perm.id[indi]].aprende[i.perm.nda[indi]].pp;
						i.perm.atk4.pr[indi]=pkdx[i.perm.id[indi]].aprende[i.perm.nda[indi]].pr;
						i.perm.atk4.pwr[indi]=pkdx[i.perm.id[indi]].aprende[i.perm.nda[indi]].pwr;
						i.perm.nda[indi]++;
					}
					ipassagem();
				}
			}
		}
		ipassagem();	
	}
	function evo(){
		if(p.atual.nivel[ind]==pkdx[p.perm.id[ind]].nqe){	
			document.getElementById("xp").innerText=p.perm.n[ind];
			KOROI=document.getElementById("xp");
			TROXO = document.createTextNode(" evoluiu para:");
			KOROI.append(TROXO);	
			document.body.querySelector('p#xpatk').hidden=true;			
			document.body.querySelector('p#xpatkesp').hidden=true;			
			document.body.querySelector('p#xpdef').hidden=true;			
			document.body.querySelector('p#xpdefesp').hidden=true;			
			document.body.querySelector('p#xphp').hidden=true;			
			document.body.querySelector('p#xpspd').hidden=true;	
			p.perm.id[ind]=p.perm.id[ind]+1;
			TROXO = document.createTextNode(pkdx[p.perm.id[ind]].n);
			KOROI.append(TROXO);
			gambiarra1=4.4;
			time=setTimeout(aprender,3000);
			cura();
		}else{
			aprender();		
			passagem();			
		}
	}
	
	function nx0(){
		p.perm.xpatk[ind]=p.perm.xpatk[ind]+Math.floor(4*Math.random())+1;
		p.perm.xpatkesp[ind]=p.perm.xpatkesp[ind]+Math.floor(4*Math.random())+1;
		p.perm.xpdef[ind]=p.perm.xpdef[ind]+Math.floor(4*Math.random())+1;
		p.perm.xpdefesp[ind]=p.perm.xpdefesp[ind]+Math.floor(4*Math.random())+1;
		p.perm.xphp[ind]=p.perm.xphp[ind]+Math.floor(4*Math.random())+1;
		p.perm.xpspd[ind]=p.perm.xpspd[ind]+Math.floor(4*Math.random())+1;
	}
	function inx0(){
		i.perm.xpatk[indi]=i.perm.xpatk[indi]+Math.floor(5*Math.random());
		i.perm.xpatkesp[indi]=i.perm.xpatkesp[indi]+Math.floor(5*Math.random());
		i.perm.xpdef[indi]=i.perm.xpdef[indi]+Math.floor(5*Math.random());
		i.perm.xpdefesp[indi]=i.perm.xpdefesp[indi]+Math.floor(5*Math.random());
		i.perm.xphp[indi]=i.perm.xphp[indi]+Math.floor(5*Math.random());
		i.perm.xpspd[indi]=i.perm.xpspd[indi]+Math.floor(5*Math.random());
	}
	function sn(){
		if(gambiarra2){
			p.atual.xp[ind]=p.atual.xp[ind]+(16*i.atual.nivel[indi]);				
			if(p.atual.xp[ind]>=p.atual.nivel[ind]*20){
				nx0();
				p.atual.xp[ind]=p.atual.xp[ind]-p.atual.nivel[ind]*20;
				p.atual.nivel[ind]=p.atual.nivel[ind]+1;
				document.getElementById("xp").innerText="Novo nivel:";
				KOROI=document.getElementById("xp");
				TROXO = document.createTextNode(p.atual.nivel[ind]);
				KOROI.append(TROXO);				
				document.getElementById("xpatk").innerText="ATK:";				
				KOROI=document.getElementById("xpatk");
				TROXO = document.createTextNode(p.perm.atk[ind]);
				KOROI.append(TROXO);
				TROXO = document.createTextNode(">");
				KOROI.append(TROXO);								
				document.getElementById("xpatkesp").innerText="ATK.ESP:";
				KOROI=document.getElementById("xpatkesp");
				TROXO = document.createTextNode(p.perm.atkesp[ind]);
				KOROI.append(TROXO);
				TROXO = document.createTextNode(">");
				KOROI.append(TROXO);								
				document.getElementById("xpdef").innerText="DEF:";
				KOROI=document.getElementById("xpdef");
				TROXO = document.createTextNode(p.perm.def[ind]);
				KOROI.append(TROXO);
				TROXO = document.createTextNode(">");
				KOROI.append(TROXO);								
				document.getElementById("xpdefesp").innerText="DEF.ESP:";
				KOROI=document.getElementById("xpdefesp");
				TROXO = document.createTextNode(p.perm.defesp[ind]);
				KOROI.append(TROXO);
				TROXO = document.createTextNode(">");
				KOROI.append(TROXO);								
				document.getElementById("xphp").innerText="HP:";
				KOROI=document.getElementById("xphp");
				TROXO = document.createTextNode(p.perm.hp[ind]);
				KOROI.append(TROXO);
				TROXO = document.createTextNode(">");
				KOROI.append(TROXO);							
				document.getElementById("xpspd").innerText="SPD:";
				KOROI=document.getElementById("xpspd");				
				TROXO = document.createTextNode(p.perm.spd[ind]);
				KOROI.append(TROXO);
				TROXO = document.createTextNode(">");
				KOROI.append(TROXO);				
				passagem();
				KOROI=document.getElementById("xpatk");
				TROXO = document.createTextNode(p.perm.atk[ind]);
				KOROI.append(TROXO);
				KOROI=document.getElementById("xpatkesp");
				TROXO = document.createTextNode(p.perm.atkesp[ind]);
				KOROI.append(TROXO);
				KOROI=document.getElementById("xpdef");
				TROXO = document.createTextNode(p.perm.def[ind]);
				KOROI.append(TROXO);
				KOROI=document.getElementById("xpdefesp");
				TROXO = document.createTextNode(p.perm.defesp[ind]);
				KOROI.append(TROXO);
				KOROI=document.getElementById("xphp");
				TROXO = document.createTextNode(p.perm.hp[ind]);
				KOROI.append(TROXO);
				KOROI=document.getElementById("xpspd");
				TROXO = document.createTextNode(p.perm.spd[ind]);
				KOROI.append(TROXO);
				document.body.querySelector('p#xp').hidden=false;			
				document.body.querySelector('p#xpatk').hidden=false;			
				document.body.querySelector('p#xpatkesp').hidden=false;			
				document.body.querySelector('p#xpdef').hidden=false;			
				document.body.querySelector('p#xpdefesp').hidden=false;			
				document.body.querySelector('p#xphp').hidden=false;			
				document.body.querySelector('p#xpspd').hidden=false;
				p.atual.hp[ind]=p.atual.hp[ind]+5;
				if(p.atual.hp[ind]>p.perm.hp[ind]){
					p.atual.hp[ind]=p.perm.hp[ind];
				}
				gambiarra1=4.2;			
				time=setTimeout(evo,12000);
			}else{
				chegadexp();
			}
		}else{
			aprender();
			nx0();
			p.atual.xp[ind]=p.atual.xp[ind]-p.atual.nivel[ind]*20;
			p.atual.nivel[ind]=p.atual.nivel[ind]+1;
		}		
	} 
	function a1(){	
		document.body.querySelector('p#batleit').hidden=true;
		upfatebat();		
		if(i.atual.hp[indi]>=1){
			if(!controle){
				esqoesc(randomatk_i(),"inimigo");
				controle=true;				
			}else if(p.atual.hp[ind]<1){
				gambiarra1=5;
				document.body.querySelector('p#batleit').hidden=false;
				document.body.querySelector('p#batleitmorte').innerText="Morreu";
				document.body.querySelector('p#batleitmorte').hidden=false;
				document.body.querySelector('p#batop').hidden= true;
				time=setTimeout(morreu,2000);
			}
		}else{
			gambiarra1=4;
			document.body.querySelector('p#batleit').hidden=false;
			document.body.querySelector('p#batleitmorte').innerText="Matou";
			document.body.querySelector('p#batleitmorte').hidden=false;
			document.body.querySelector('p#batop').hidden= true;
			time=setTimeout(matou,2000);
		}
		if(document.body.querySelector('p#batleit').hidden && document.body.querySelector('p#batleitmorte').hidden){
			document.body.querySelector('p#batop').hidden= false;
		}
	}
	function a2(){
		document.body.querySelector('p#batleit').hidden=true;
		upfatebat();
		if(p.atual.hp[ind]>=1){
			if(!pcontrole){
				esqoesc(p.atual.atk1,"voce");
				pcontrole=true;			
			}else if(i.atual.hp[indi]<1){
				gambiarra1=4;
				document.body.querySelector('p#batleit').hidden=false;
				document.body.querySelector('p#batleitmorte').innerText="Matou";
				document.body.querySelector('p#batleitmorte').hidden=false;
				document.body.querySelector('p#batop').hidden= true;
				time=setTimeout(matou,2000);
			}
			if(document.body.querySelector('p#batleit').hidden && document.body.querySelector('p#batleitmorte').hidden){
				document.body.querySelector('p#batop').hidden= false;
			}
		}else{
			gambiarra1=5;
			document.body.querySelector('p#batleit').hidden=false;
			document.body.querySelector('p#batleitmorte').innerText="Morreu";
			document.body.querySelector('p#batleitmorte').hidden=false;
			document.body.querySelector('p#batop').hidden= true;
			time=setTimeout(morreu,2000);
		}
	}
	function a3(){
		document.body.querySelector('p#batleit').hidden=true;
		upfatebat();
		if(p.atual.hp[ind]>=1){
			if(!pcontrole){
				esqoesc(p.atual.atk2,"voce");
				pcontrole=true;			
			}else if(i.atual.hp[indi]<1){
				gambiarra1=4;
				document.body.querySelector('p#batleit').hidden=false;
				document.body.querySelector('p#batleitmorte').innerText="Matou";
				document.body.querySelector('p#batleitmorte').hidden=false;
				document.body.querySelector('p#batop').hidden= true;
				time=setTimeout(matou,2000);
			}
			if(document.body.querySelector('p#batleit').hidden && document.body.querySelector('p#batleitmorte').hidden){
				document.body.querySelector('p#batop').hidden= false;
			}
		}else{
			gambiarra1=5;
			document.body.querySelector('p#batleit').hidden=false;
			document.body.querySelector('p#batleitmorte').innerText="Morreu";
			document.body.querySelector('p#batleitmorte').hidden=false;
			document.body.querySelector('p#batop').hidden= true;
			time=setTimeout(morreu,2000);
		}
	}
	function a4(){
		document.body.querySelector('p#batleit').hidden=true;
		upfatebat();
		if(p.atual.hp[ind]>=1){
			if(!pcontrole){
				esqoesc(p.atual.atk3,"voce");
				pcontrole=true;			
			}else if(i.atual.hp[indi]<1){
				gambiarra1=4;
				document.body.querySelector('p#batleit').hidden=false;
				document.body.querySelector('p#batleitmorte').innerText="Matou";
				document.body.querySelector('p#batleitmorte').hidden=false;
				document.body.querySelector('p#batop').hidden= true;
				time=setTimeout(matou,2000);
			}
			if(document.body.querySelector('p#batleit').hidden && document.body.querySelector('p#batleitmorte').hidden){
				document.body.querySelector('p#batop').hidden= false;
			}
		}else{
			gambiarra1=5;
			document.body.querySelector('p#batleit').hidden=false;
			document.body.querySelector('p#batleitmorte').innerText="Morreu";
			document.body.querySelector('p#batleitmorte').hidden=false;
			document.body.querySelector('p#batop').hidden= true;
			time=setTimeout(morreu,2000);
		}
	}
	function a5(){
		document.body.querySelector('p#batleit').hidden=true;
		upfatebat();
		if(p.atual.hp[ind]>=1){
			if(!pcontrole){
				esqoesc(p.atual.atk4,"voce");
				pcontrole=true;			
			}else if(i.atual.hp[indi]<1){
				gambiarra1=4;
				document.body.querySelector('p#batleit').hidden=false;
				document.body.querySelector('p#batleitmorte').innerText="Matou";
				document.body.querySelector('p#batleitmorte').hidden=false;
				document.body.querySelector('p#batop').hidden= true;
				time=setTimeout(matou,2000);
			}
			if(document.body.querySelector('p#batleit').hidden && document.body.querySelector('p#batleitmorte').hidden){
				document.body.querySelector('p#batop').hidden= false;
			}
		}else{
			gambiarra1=5;
			document.body.querySelector('p#batleit').hidden=false;
			document.body.querySelector('p#batleitmorte').innerText="Morreu";
			document.body.querySelector('p#batleitmorte').hidden=false;
			document.body.querySelector('p#batop').hidden= true;
			time=setTimeout(morreu,2000);
		}
	}
	function passagem(){
		for(ca=0;ca<6;ca++){
			if(p.perm.id[ca]!=undefined){
				p.perm.n[ca]=pkdx[p.perm.id[ca]].n;
				p.perm.el[ca]=pkdx[p.perm.id[ca]].el;
				p.perm.rar[ca]=pkdx[p.perm.id[ca]].rar;
				p.perm.desv[ca]=pkdx[p.perm.id[ca]].desv;
				p.perm.pr[ca]=pkdx[p.perm.id[ca]].pr;
				p.perm.el2[ca]=pkdx[p.perm.id[ca]].el2;
				p.perm.atk[ca]=pkdx[p.perm.id[ca]].atk+p.perm.xpatk[ca];
				p.perm.atkesp[ca]=pkdx[p.perm.id[ca]].atkesp+p.perm.xpatkesp[ca];
				p.perm.hp[ca]=pkdx[p.perm.id[ca]].hp+p.perm.xphp[ca];
				p.perm.def[ca]=pkdx[p.perm.id[ca]].def+p.perm.xpdef[ca];
				p.perm.defesp[ca]=pkdx[p.perm.id[ca]].defesp+p.perm.xpdefesp[ca];
				p.perm.spd[ca]=pkdx[p.perm.id[ca]].spd+p.perm.xpspd[ca];
				p.atual.nome[ca]=p.perm.n[ca];
				p.atual.desv[ca]=p.perm.desv[ca];
				p.atual.pr[ca]=p.perm.pr[ca];
				p.atual.el[ca]=p.perm.el[ca];
				p.atual.el2[ca]=p.perm.el2[ca];
				p.atual.atk[ca]=p.perm.atk[ca];
				p.atual.atkesp[ca]=p.perm.atkesp[ca];
				p.atual.def[ca]=p.perm.def[ca];
				p.atual.defesp[ca]=p.perm.defesp[ca];
				p.atual.spd[ca]=p.perm.spd[ca];
				p.atual.atk1.nome[ca]=p.perm.atk1.nome[ca];
				p.atual.atk1.cat[ca]=p.perm.atk1.cat[ca];
				p.atual.atk1.el[ca]=p.perm.atk1.el[ca];
				p.atual.atk1.pr[ca]=p.perm.atk1.pr[ca];
				p.atual.atk1.pwr[ca]=p.perm.atk1.pwr[ca];
				p.atual.atk2.nome[ca]=p.perm.atk2.nome[ca];
				p.atual.atk2.cat[ca]=p.perm.atk2.cat[ca];
				p.atual.atk2.el[ca]=p.perm.atk2.el[ca];
				p.atual.atk2.pr[ca]=p.perm.atk2.pr[ca];
				p.atual.atk2.pwr[ca]=p.perm.atk2.pwr[ca];		
				p.atual.atk3.nome[ca]=p.perm.atk3.nome[ca];
				p.atual.atk3.cat[ca]=p.perm.atk3.cat[ca];
				p.atual.atk3.el[ca]=p.perm.atk3.el[ca];
				p.atual.atk3.pr[ca]=p.perm.atk3.pr[ca];
				p.atual.atk3.pwr[ca]=p.perm.atk3.pwr[ca];		
				p.atual.atk4.nome[ca]=p.perm.atk4.nome[ca];
				p.atual.atk4.cat[ca]=p.perm.atk4.cat[ca];
				p.atual.atk4.el[ca]=p.perm.atk4.el[ca];
				p.atual.atk4.pr[ca]=p.perm.atk4.pr[ca];
				p.atual.atk4.pwr[ca]=p.perm.atk4.pwr[ca];
			}
		}
	}
	function ipassagem(){
		i.perm.n[indi]=pkdx[i.perm.id[indi]].n;
		i.perm.el[indi]=pkdx[i.perm.id[indi]].el;
		i.perm.rar[indi]=pkdx[i.perm.id[indi]].rar;
		i.perm.desv[indi]=pkdx[i.perm.id[indi]].desv;
		i.perm.pr[indi]=pkdx[i.perm.id[indi]].pr;
		i.perm.atk[indi]=pkdx[i.perm.id[indi]].atk+i.perm.xpatk[indi];
		i.perm.atkesp[indi]=pkdx[i.perm.id[indi]].atkesp+i.perm.xpatkesp[indi];
		i.perm.hp[indi]=pkdx[i.perm.id[indi]].hp+i.perm.xphp[indi];
		i.perm.def[indi]=pkdx[i.perm.id[indi]].def+i.perm.xpdef[indi];
		i.perm.defesp[indi]=pkdx[i.perm.id[indi]].defesp+i.perm.xpdefesp[indi];
		i.perm.spd[indi]=pkdx[i.perm.id[indi]].spd+i.perm.xpspd[indi];
		i.atual.nome[indi]=i.perm.n[indi];
		i.atual.el[indi]=i.perm.el[indi];
		i.atual.el2[indi]=i.perm.el2[indi];
		i.atual.atk[indi]=i.perm.atk[indi];
		i.atual.atkesp[indi]=i.perm.atkesp[indi];
		i.atual.def[indi]=i.perm.def[indi];
		i.atual.defesp[indi]=i.perm.defesp[indi];
		i.atual.spd[indi]=i.perm.spd[indi];
		i.atual.hp[indi]=i.perm.hp[indi];
		i.atual.atk1.nome[indi]=i.perm.atk1.nome[indi];
		i.atual.atk1.cat[indi]=i.perm.atk1.cat[indi];
		i.atual.atk1.el[indi]=i.perm.atk1.el[indi];
		i.atual.atk1.pr[indi]=i.perm.atk1.pr[indi];
		i.atual.atk1.pwr[indi]=i.perm.atk1.pwr[indi];
		i.atual.atk2.nome[indi]=i.perm.atk2.nome[indi];
		i.atual.atk2.cat[indi]=i.perm.atk2.cat[indi];
		i.atual.atk2.el[indi]=i.perm.atk2.el[indi];
		i.atual.atk2.pr[indi]=i.perm.atk2.pr[indi];
		i.atual.atk2.pwr[indi]=i.perm.atk2.pwr[indi];				
		i.atual.atk3.nome[indi]=i.perm.atk3.nome[indi];
		i.atual.atk3.cat[indi]=i.perm.atk3.cat[indi];
		i.atual.atk3.el[indi]=i.perm.atk3.el[indi];
		i.atual.atk3.pr[indi]=i.perm.atk3.pr[indi];
		i.atual.atk3.pwr[indi]=i.perm.atk3.pwr[indi];		
		i.atual.atk4.nome[indi]=i.perm.atk4.nome[indi];
		i.atual.atk4.cat[indi]=i.perm.atk4.cat[indi];
		i.atual.atk4.el[indi]=i.perm.atk4.el[indi];
		i.atual.atk4.pr[indi]=i.perm.atk4.pr[indi];
		i.atual.atk4.pwr[indi]=i.perm.atk4.pwr[indi];
	}
	function cappassagem(){
		indcap=0;
		voce=estado.andando;
		if(p.atual.nome.length<6){
			for(cac=0;cac<=p.atual.nome.length;cac++){
				indcap++;
				if(p.perm.id[indcap]==undefined){
					break;
				}
			}
			p.perm.id[indcap]=i.perm.id[indi];
			p.atual.nivel[indcap]=i.atual.nivel[indi];
			p.atual.xp[indcap]=0;
			p.atual.nivel[indcap]=i.atual.nivel[indi];
			p.atual.hp[indcap]=i.atual.hp[indi];
			p.perm.xpatk[indcap]=i.perm.xpatk[indi];
			p.perm.xpatkesp[indcap]=i.perm.xpatkesp[indi];
			p.perm.xphp[indcap]=i.perm.xphp[indi];
			p.perm.xpdef[indcap]=i.perm.xpdef[indi];
			p.perm.xpdefesp[indcap]=i.perm.xpdefesp[indi];
			p.perm.xpspd[indcap]=i.perm.xpspd[indi];
			p.perm.atk1.nome[indcap]=i.perm.atk1.nome[indi];
			p.perm.atk1.cat[indcap]=i.perm.atk1.cat[indi];
			p.perm.atk1.el[indcap]=i.perm.atk1.el[indi];
			p.perm.atk1.pr[indcap]=i.perm.atk1.pr[indi];
			p.perm.atk1.pwr[indcap]=i.perm.atk1.pwr[indi];
			p.perm.atk2.nome[indcap]=i.perm.atk2.nome[indi];
			p.perm.atk2.cat[indcap]=i.perm.atk2.cat[indi];
			p.perm.atk2.el[indcap]=i.perm.atk2.el[indi];
			p.perm.atk2.pr[indcap]=i.perm.atk2.pr[indi];
			p.perm.atk2.pwr[indcap]=i.perm.atk2.pwr[indi];
			p.perm.atk3.nome[indcap]=i.perm.atk3.nome[indi];
			p.perm.atk3.cat[indcap]=i.perm.atk3.cat[indi];
			p.perm.atk3.el[indcap]=i.perm.atk3.el[indi];
			p.perm.atk3.pr[indcap]=i.perm.atk3.pr[indi];
			p.perm.atk3.pwr[indcap]=i.perm.atk3.pwr[indi];
			p.perm.atk4.nome[indcap]=i.perm.atk4.nome[indi];
			p.perm.atk4.cat[indcap]=i.perm.atk4.cat[indi];
			p.perm.atk4.el[indcap]=i.perm.atk4.el[indi];
			p.perm.atk4.pr[indcap]=i.perm.atk4.pr[indi];
			p.perm.atk4.pwr[indcap]=i.perm.atk4.pwr[indi];
			passagem();
		}else{
			for(cpcp=0;cpcp<pc.atual.nome.length;cpcp++){
				indcap++;
				if(p.perm.id[indcap]==undefined){
					break;
				}
			}
			pc.perm.id[indcap]=i.perm.id[indi];
			pc.atual.nivel[indcap]=i.atual.nivel[indi];
			pc.atual.xp[indcap]=0;
			pc.atual.nivel[indcap]=i.atual.nivel[indi];
			pc.atual.hp[indcap]=i.atual.hp[indi];
			pc.perm.xpatk[indcap]=i.perm.xpatk[indi];
			pc.perm.xpatkesp[indcap]=i.perm.xpatkesp[indi];
			pc.perm.xphp[indcap]=i.perm.xphp[indi];
			pc.perm.xpdef[indcap]=i.perm.xpdef[indi];
			pc.perm.xpdefesp[indcap]=i.perm.xpdefesp[indi];
			pc.perm.xpspd[indcap]=i.perm.xpspd[indi];
			pc.perm.atk1.nome[indcap]=i.perm.atk1.nome[indi];
			pc.perm.atk1.cat[indcap]=i.perm.atk1.cat[indi];
			pc.perm.atk1.el[indcap]=i.perm.atk1.el[indi];
			pc.perm.atk1.pr[indcap]=i.perm.atk1.pr[indi];
			pc.perm.atk1.pwr[indcap]=i.perm.atk1.pwr[indi];
			pc.perm.atk2.nome[indcap]=i.perm.atk2.nome[indi];
			pc.perm.atk2.cat[indcap]=i.perm.atk2.cat[indi];
			pc.perm.atk2.el[indcap]=i.perm.atk2.el[indi];
			pc.perm.atk2.pr[indcap]=i.perm.atk2.pr[indi];
			pc.perm.atk2.pwr[indcap]=i.perm.atk2.pwr[indi];
			pc.perm.atk3.nome[indcap]=i.perm.atk3.nome[indi];
			pc.perm.atk3.cat[indcap]=i.perm.atk3.cat[indi];
			pc.perm.atk3.el[indcap]=i.perm.atk3.el[indi];
			pc.perm.atk3.pr[indcap]=i.perm.atk3.pr[indi];
			pc.perm.atk3.pwr[indcap]=i.perm.atk3.pwr[indi];
			pc.perm.atk4.nome[indcap]=i.perm.atk4.nome[indi];
			pc.perm.atk4.cat[indcap]=i.perm.atk4.cat[indi];
			pc.perm.atk4.el[indcap]=i.perm.atk4.el[indi];
			pc.perm.atk4.pr[indcap]=i.perm.atk4.pr[indi];
			pc.perm.atk4.pwr[indcap]=i.perm.atk4.pwr[indi];
			
		
			pc.perm.n[indcap]=pkdx[pc.perm.id[indcap]].n;
			pc.perm.el[indcap]=pkdx[pc.perm.id[indcap]].el;
			pc.perm.rar[indcap]=pkdx[pc.perm.id[indcap]].rar;
			pc.perm.desv[indcap]=pkdx[pc.perm.id[indcap]].desv;
			pc.perm.pr[indcap]=pkdx[pc.perm.id[indcap]].pr;
			pc.perm.el2[indcap]=pkdx[pc.perm.id[indcap]].el2;
			pc.perm.atk[indcap]=pkdx[pc.perm.id[indcap]].atk+pc.perm.xpatk[indcap];
			pc.perm.atkesp[indcap]=pkdx[pc.perm.id[indcap]].atkesp+pc.perm.xpatkesp[indcap];
			pc.perm.hp[indcap]=pkdx[pc.perm.id[indcap]].hp+pc.perm.xphp[indcap];
			pc.perm.def[indcap]=pkdx[pc.perm.id[indcap]].def+pc.perm.xpdef[indcap];
			pc.perm.defesp[indcap]=pkdx[pc.perm.id[indcap]].defesp+pc.perm.xpdefesp[indcap];
			pc.perm.spd[indcap]=pkdx[pc.perm.id[indcap]].spd+pc.perm.xpspd[indcap];
			pc.atual.nome[indcap]=pc.perm.n[indcap];
			pc.atual.desv[indcap]=pc.perm.desv[indcap];
			pc.atual.pr[indcap]=pc.perm.pr[indcap];
			pc.atual.el[indcap]=pc.perm.el[indcap];
			pc.atual.el2[indcap]=pc.perm.el2[indcap];
			pc.atual.atk[indcap]=pc.perm.atk[indcap];
			pc.atual.atkesp[indcap]=pc.perm.atkesp[indcap];
			pc.atual.def[indcap]=pc.perm.def[indcap];
			pc.atual.defesp[indcap]=pc.perm.defesp[indcap];
			pc.atual.spd[indcap]=pc.perm.spd[indcap];
			pc.atual.atk1.nome[indcap]=pc.perm.atk1.nome[indcap];
			pc.atual.atk1.cat[indcap]=pc.perm.atk1.cat[indcap];
			pc.atual.atk1.el[indcap]=pc.perm.atk1.el[indcap];
			pc.atual.atk1.pr[indcap]=pc.perm.atk1.pr[indcap];
			pc.atual.atk1.pwr[indcap]=pc.perm.atk1.pwr[indcap];
			pc.atual.atk2.nome[indcap]=pc.perm.atk2.nome[indcap];
			pc.atual.atk2.cat[indcap]=pc.perm.atk2.cat[indcap];
			pc.atual.atk2.el[indcap]=pc.perm.atk2.el[indcap];
			pc.atual.atk2.pr[indcap]=pc.perm.atk2.pr[indcap];
			pc.atual.atk2.pwr[indcap]=pc.perm.atk2.pwr[indcap];		
			pc.atual.atk3.nome[indcap]=pc.perm.atk3.nome[indcap];
			pc.atual.atk3.cat[indcap]=pc.perm.atk3.cat[indcap];
			pc.atual.atk3.el[indcap]=pc.perm.atk3.el[indcap];
			pc.atual.atk3.pr[indcap]=pc.perm.atk3.pr[indcap];
			pc.atual.atk3.pwr[indcap]=pc.perm.atk3.pwr[indcap];		
			pc.atual.atk4.nome[indcap]=pc.perm.atk4.nome[indcap];
			pc.atual.atk4.cat[indcap]=pc.perm.atk4.cat[indcap];
			pc.atual.atk4.el[indcap]=pc.perm.atk4.el[indcap];
			pc.atual.atk4.pr[indcap]=pc.perm.atk4.pr[indcap];
			pc.atual.atk4.pwr[indcap]=pc.perm.atk4.pwr[indcap];
		}
	}
	function pcpassagem(){
		mei=p.perm.id[opbat];
		p.perm.id[opbat]=pc.perm.id[indcap];
		pc.perm.id[indcap]=mei;
		
		mei=p.atual.nivel[opbat];
		p.atual.nivel[opbat]=pc.atual.nivel[indcap];
		pc.atual.nivel[indcap]=mei;
		
		mei=p.atual.xp[opbat];
		p.atual.xp[opbat]=pc.atual.xp[indcap];
		pc.atual.xp[indcap]=mei;
		
		mei=p.atual.hp[opbat];
		p.atual.hp[opbat]=pc.atual.hp[indcap];
		pc.atual.hp[indcap]=mei;
		
		mei=p.perm.xpatk[opbat];
		p.perm.xpatk[opbat]=pc.perm.xpatk[indcap];
		pc.perm.xpatk[indcap]=mei;
		
		mei=p.perm.xpatkesp[opbat];
		p.perm.xpatkesp[opbat]=pc.perm.xpatkesp[indcap];
		pc.perm.xpatkesp[indcap]=mei;
		
		mei=p.perm.xphp[opbat];
		p.perm.xphp[opbat]=pc.perm.xphp[indcap];
		pc.perm.xphp[indcap]=mei;
		
		mei=p.perm.xpdef[opbat];
		p.perm.xpdef[opbat]=pc.perm.xpdef[indcap];
		pc.perm.xpdef[indcap]=mei;
		
		mei=p.perm.xpdefesp[opbat];
		p.perm.xpdefesp[opbat]=pc.perm.xpdefesp[indcap];
		pc.perm.xpdefesp[indcap]=mei;
		
		mei=p.perm.xpspd[opbat];
		p.perm.xpspd[opbat]=pc.perm.xpspd[indcap];
		pc.perm.xpspd[indcap]=mei;
		
		mei=p.perm.atk1.nome[opbat];
		p.perm.atk1.nome[opbat]=pc.perm.atk1.nome[indcap];
		pc.perm.atk1.nome[indcap]=mei;
		
		mei=p.perm.atk1.cat[opbat];
		p.perm.atk1.cat[opbat]=pc.perm.atk1.cat[indcap];
		pc.perm.atk1.cat[indcap]=mei;
		
		mei=p.perm.atk1.el[opbat];
		p.perm.atk1.el[opbat]=pc.perm.atk1.el[indcap];
		pc.perm.atk1.el[indcap]=mei;
		
		mei=p.perm.atk1.pr[opbat];
		p.perm.atk1.pr[opbat]=pc.perm.atk1.pr[indcap];
		pc.perm.atk1.pr[indcap]=mei;
		
		mei=p.perm.atk1.pwr[opbat];
		p.perm.atk1.pwr[opbat]=pc.perm.atk1.pwr[indcap];
		pc.perm.atk1.pwr[indcap]=mei;
		mei=p.perm.atk2.nome[opbat];
		p.perm.atk2.nome[opbat]=pc.perm.atk2.nome[indcap];
		pc.perm.atk2.nome[indcap]=mei;
		
		mei=p.perm.atk2.cat[opbat];
		p.perm.atk2.cat[opbat]=pc.perm.atk2.cat[indcap];
		pc.perm.atk2.cat[indcap]=mei;
		
		mei=p.perm.atk2.el[opbat];
		p.perm.atk2.el[opbat]=pc.perm.atk2.el[indcap];
		pc.perm.atk2.el[indcap]=mei;
		
		mei=p.perm.atk2.pr[opbat];
		p.perm.atk2.pr[opbat]=pc.perm.atk2.pr[indcap];
		pc.perm.atk2.pr[indcap]=mei;
		
		mei=p.perm.atk2.pwr[opbat];
		p.perm.atk2.pwr[opbat]=pc.perm.atk2.pwr[indcap];
		pc.perm.atk2.pwr[indcap]=mei;
		
		mei=p.perm.atk3.nome[opbat];
		p.perm.atk3.nome[opbat]=pc.perm.atk3.nome[indcap];
		pc.perm.atk3.nome[indcap]=mei;
		
		mei=p.perm.atk3.cat[opbat];
		p.perm.atk3.cat[opbat]=pc.perm.atk3.cat[indcap];
		pc.perm.atk3.cat[indcap]=mei;
		
		mei=p.perm.atk3.el[opbat];
		p.perm.atk3.el[opbat]=pc.perm.atk3.el[indcap];
		pc.perm.atk3.el[indcap]=mei;
		
		mei=p.perm.atk3.pr[opbat];
		p.perm.atk3.pr[opbat]=pc.perm.atk3.pr[indcap];
		pc.perm.atk3.pr[indcap]=mei;
		
		mei=p.perm.atk3.pwr[opbat];
		p.perm.atk3.pwr[opbat]=pc.perm.atk3.pwr[indcap];
		pc.perm.atk3.pwr[indcap]=mei;
		
		mei=p.perm.atk4.nome[opbat];
		p.perm.atk4.nome[opbat]=pc.perm.atk4.nome[indcap];
		pc.perm.atk4.nome[indcap]=mei;
		
		mei=p.perm.atk4.cat[opbat];
		p.perm.atk4.cat[opbat]=pc.perm.atk4.cat[indcap];
		pc.perm.atk4.cat[indcap]=mei;
		
		mei=p.perm.atk4.el[opbat];
		p.perm.atk4.el[opbat]=pc.perm.atk4.el[indcap];
		pc.perm.atk4.el[indcap]=mei;
		
		mei=p.perm.atk4.pr[opbat];
		p.perm.atk4.pr[opbat]=pc.perm.atk4.pr[indcap];
		pc.perm.atk4.pr[indcap]=mei;
		
		mei=p.perm.atk4.pwr[opbat];
		p.perm.atk4.pwr[opbat]=pc.perm.atk4.pwr[indcap];
		pc.perm.atk4.pwr[indcap]=mei;
		passagem();		
		pc.perm.n[indcap]=pkdx[pc.perm.id[indcap]].n;
			pc.perm.el[indcap]=pkdx[pc.perm.id[indcap]].el;
			pc.perm.rar[indcap]=pkdx[pc.perm.id[indcap]].rar;
			pc.perm.desv[indcap]=pkdx[pc.perm.id[indcap]].desv;
			pc.perm.pr[indcap]=pkdx[pc.perm.id[indcap]].pr;
			pc.perm.el2[indcap]=pkdx[pc.perm.id[indcap]].el2;
			pc.perm.atk[indcap]=pkdx[pc.perm.id[indcap]].atk+pc.perm.xpatk[indcap];
			pc.perm.atkesp[indcap]=pkdx[pc.perm.id[indcap]].atkesp+pc.perm.xpatkesp[indcap];
			pc.perm.hp[indcap]=pkdx[pc.perm.id[indcap]].hp+pc.perm.xphp[indcap];
			pc.perm.def[indcap]=pkdx[pc.perm.id[indcap]].def+pc.perm.xpdef[indcap];
			pc.perm.defesp[indcap]=pkdx[pc.perm.id[indcap]].defesp+pc.perm.xpdefesp[indcap];
			pc.perm.spd[indcap]=pkdx[pc.perm.id[indcap]].spd+pc.perm.xpspd[indcap];
			pc.atual.nome[indcap]=pc.perm.n[indcap];
			pc.atual.desv[indcap]=pc.perm.desv[indcap];
			pc.atual.pr[indcap]=pc.perm.pr[indcap];
			pc.atual.el[indcap]=pc.perm.el[indcap];
			pc.atual.el2[indcap]=pc.perm.el2[indcap];
			pc.atual.atk[indcap]=pc.perm.atk[indcap];
			pc.atual.atkesp[indcap]=pc.perm.atkesp[indcap];
			pc.atual.def[indcap]=pc.perm.def[indcap];
			pc.atual.defesp[indcap]=pc.perm.defesp[indcap];
			pc.atual.spd[indcap]=pc.perm.spd[indcap];
			pc.atual.atk1.nome[indcap]=pc.perm.atk1.nome[indcap];
			pc.atual.atk1.cat[indcap]=pc.perm.atk1.cat[indcap];
			pc.atual.atk1.el[indcap]=pc.perm.atk1.el[indcap];
			pc.atual.atk1.pr[indcap]=pc.perm.atk1.pr[indcap];
			pc.atual.atk1.pwr[indcap]=pc.perm.atk1.pwr[indcap];
			pc.atual.atk2.nome[indcap]=pc.perm.atk2.nome[indcap];
			pc.atual.atk2.cat[indcap]=pc.perm.atk2.cat[indcap];
			pc.atual.atk2.el[indcap]=pc.perm.atk2.el[indcap];
			pc.atual.atk2.pr[indcap]=pc.perm.atk2.pr[indcap];
			pc.atual.atk2.pwr[indcap]=pc.perm.atk2.pwr[indcap];		
			pc.atual.atk3.nome[indcap]=pc.perm.atk3.nome[indcap];
			pc.atual.atk3.cat[indcap]=pc.perm.atk3.cat[indcap];
			pc.atual.atk3.el[indcap]=pc.perm.atk3.el[indcap];
			pc.atual.atk3.pr[indcap]=pc.perm.atk3.pr[indcap];
			pc.atual.atk3.pwr[indcap]=pc.perm.atk3.pwr[indcap];		
			pc.atual.atk4.nome[indcap]=pc.perm.atk4.nome[indcap];
			pc.atual.atk4.cat[indcap]=pc.perm.atk4.cat[indcap];
			pc.atual.atk4.el[indcap]=pc.perm.atk4.el[indcap];
			pc.atual.atk4.pr[indcap]=pc.perm.atk4.pr[indcap];
			pc.atual.atk4.pwr[indcap]=pc.perm.atk4.pwr[indcap];
	}
	function cura(){
		for(co=0;co<p.perm.hp.length;co++){
			p.atual.hp[co]=p.perm.hp[co];
		}
	}
	function upfatebat(){
		document.getElementById("bat").innerText=p.atual.nome[ind];
		KOROI=document.getElementById("bat");
		TROXO = document.createTextNode("-");
		KOROI.append(TROXO);
		TROXO = document.createTextNode(p.atual.el[ind]);
		KOROI.append(TROXO);
		if(p.atual.el2[ind]!=undefined){
			TROXO = document.createTextNode("/");
			KOROI.append(TROXO);
			TROXO = document.createTextNode(p.atual.el2[ind]);
			KOROI.append(TROXO);
		}
		TROXO = document.createTextNode(" ");
		KOROI.append(TROXO);
		TROXO = document.createTextNode("|");
		KOROI.append(TROXO);
		TROXO = document.createTextNode(parseInt(p.atual.hp[ind]),10);
		KOROI.append(TROXO);
		TROXO = document.createTextNode("/");
		KOROI.append(TROXO);
		TROXO = document.createTextNode(p.perm.hp[ind]);
		KOROI.append(TROXO);
		TROXO = document.createTextNode("|");
		KOROI.append(TROXO);
		TROXO = document.createTextNode(" VS ");
		KOROI.append(TROXO);
		TROXO = document.createTextNode(i.atual.nome[indi]);
		KOROI.append(TROXO);
		TROXO = document.createTextNode("-");
		KOROI.append(TROXO);
		TROXO = document.createTextNode(i.atual.el[indi]);
		KOROI.append(TROXO);
		if(i.atual.el2[indi]!=undefined){
			TROXO = document.createTextNode("/");
			KOROI.append(TROXO);
			TROXO = document.createTextNode(i.atual.el2[indi]);
			KOROI.append(TROXO);
		}
		TROXO = document.createTextNode("|");
		KOROI.append(TROXO);
		TROXO = document.createTextNode(parseInt(i.atual.hp[indi]),10);
		KOROI.append(TROXO);
		TROXO = document.createTextNode("/");
		KOROI.append(TROXO);
		TROXO = document.createTextNode(i.perm.hp[indi]);
		KOROI.append(TROXO);
		TROXO = document.createTextNode("|");
		KOROI.append(TROXO);
		document.getElementById("batni").innerText="nivel:";
		KOROI=document.getElementById("batni");
		TROXO = document.createTextNode(p.atual.nivel[ind]);
		KOROI.append(TROXO);
		TROXO = document.createTextNode("|"+p.atual.xp[ind]+"/"+p.atual.nivel[ind]*20+"| ");
		KOROI.append(TROXO);
		TROXO = document.createTextNode(" nivel:");
		KOROI.append(TROXO);
		TROXO = document.createTextNode(i.atual.nivel[indi]);
		KOROI.append(TROXO);
	}

	function randomatk_i(){
		if(i.atual.atk4.nome[indi]!=undefined){
			q=Math.floor(4*Math.random())+1;
		}else if(i.atual.atk3.nome[indi]!=undefined){
			q=Math.floor(3*Math.random())+1;
		}else if(i.atual.atk2.nome[indi]!=undefined){
			q=Math.floor(2*Math.random())+1;
		}else{	
			q=1;
		}
		if(q==1){
			q=i.atual.atk1;
		}else if(q==2){
			q=i.atual.atk2;
		}else if(q==3){
			q=i.atual.atk3;
		}else if(q==4){
			q=i.atual.atk4;
		}
		return q;
	}
	function crit(){
		document.getElementById("batleit").innerText="Crítico";
		gambiarracrit=false;
		mud=0;
	}
	function usar(item,forca){
		document.body.querySelector('p#enter').hidden=true;
		document.body.querySelector('p#mochila').hidden=true;
		document.body.querySelector('p#mopkb').hidden=true;
		document.body.querySelector('p#mogpkb').hidden=true;
		document.body.querySelector('p#moupkb').hidden=true;
		document.body.querySelector('p#mompkb').hidden=true;
		document.body.querySelector('p#mohep').hidden=true;
		document.body.querySelector('p#mohem').hidden=true;
		document.body.querySelector('p#moheg').hidden=true;
		if(item==1){
			cap=1+Math.floor(100*Math.random());
			if(i.atual.hp[indi]<=i.perm.hp[indi]/4){
				forca=forca*2;
			}else if(i.atual.hp[indi]<=i.perm.hp[indi]/2){
				forca=forca*1.25;
			}
			if(cap>=i.perm.rar[indi]*30/forca){				
				document.getElementById("batleit").innerText="Capturou";
				document.getElementById("batleit").hidden=false;
				document.getElementById("batop").hidden=true;
				gambiarra1=4;
				time=setTimeout(matou,2000);
				cappassagem();
			}else{
				document.getElementById("batleit").innerText="Falhou em capturar";
				document.getElementById("batleit").hidden=false;
				gambiarra1=8;
				time=setTimeout(sla,2000);
			}
		}else if(item==2){
			p.atual.hp[ind]=p.atual.hp[ind]+forca;
			if(p.atual.hp[ind]>p.perm.hp[ind]){
				p.atual.hp[ind]=p.perm.hp[ind];
			}
			document.getElementById("batleit").innerText="Usou healer";
			document.getElementById("batleit").hidden=false;
			gambiarra1=8;
			time=setTimeout(sla,2000);
		}
	}
	function sla(){
		if(!gambiarra3){
			controle=true;
			opbat=undefined;
			op=0;
			gambiarra1=1;
			esqoesc(randomatk_i(),"inimigo");
		}
	}
	function esqoesc(atk,vez){				
		if(vez=="voce"){
			document.getElementById("batleit").innerText= p.atual.nome[ind];
			esq.nome=atk.nome[ind];
			esq.cat=atk.cat[ind];
			esq.el=atk.el[ind];
			esq.pr=atk.pr[ind];
			esq.pp=atk.pp[ind];
			esq.pwr=atk.pwr[ind];			
			chan=1+Math.floor(100*Math.random());
			if(chan<=esq.pr && esq.cat!="Stats"){
				efeitoreal=efetivo(esq.el,i.atual.el[indi],i.atual.el2[indi]);
				danoreal=calculo(p.atual.atk[ind],p.atual.atkesp[ind],i.atual.def[indi],i.atual.defesp[indi],esq.pwr,esq.cat,efeitoreal,vez);
				i.atual.hp[indi]=i.atual.hp[indi]-danoreal;
				if(i.atual.hp[indi]<1){
					i.atual.hp[indi]=0;
				}
			}else if(esq.cat=="Stats"){
				efeitinhos(esq.el,esq.pwr,vez);
			}else{
				mud=1;
			}
		}else{
			document.getElementById("batleit").innerText= i.atual.nome[indi];
			esq.nome=atk.nome[indi];
			esq.cat=atk.cat[indi];
			esq.el=atk.el[indi];
			esq.pr=atk.pr[indi];
			esq.pp=atk.pp[indi];
			esq.pwr=atk.pwr[indi];
			chan=1+Math.floor(100*Math.random());
			if(chan<=esq.pr && esq.cat!="Stats"){
				efeitoreal=efetivo(esq.el,p.atual.el[ind],p.atual.el2[ind]);
				danoreal=calculo(i.atual.atk[indi],i.atual.atkesp[indi],p.atual.def[ind],p.atual.defesp[ind],esq.pwr,esq.cat,efeitoreal,vez);
				p.atual.hp[ind]=p.atual.hp[ind]-danoreal;
				if(p.atual.hp[ind]<1){
					p.atual.hp[ind]=0;
				}		
			}else if(esq.cat=="Stats"){
				efeitinhos(esq.el,esq.pwr,vez);
			}else{
				mud=1;
			}
		}		
		KOROI=document.getElementById("batleit");
		if(chan<=esq.pr && esq.cat!="Stats"){
			TROXO = document.createTextNode(" usou "+esq.nome+" ("+efeitoreal+"x efetivo) - "+parseInt(danoreal,10)+" de dano");
			KOROI.append(TROXO);
			if(mud==2){
				gambiarracrit=true;
				time=setTimeout(crit,3000);
			}
		}else if(esq.cat!="Stats"){
			TROXO = document.createTextNode(" usou "+esq.nome+", mas errou");
			KOROI.append(TROXO);
		}
		document.body.querySelector('p#batleit').hidden=false;		
		document.body.querySelector('p#batop').hidden=true;
		if(gambiarra1==1){			
			time=setTimeout(a1,5000);
		}else if(gambiarra1==2){
			time=setTimeout(a2,5000);
		}else if(gambiarra1==3){
			time=setTimeout(a3,5000);
		}else if(gambiarra1==6){
			time=setTimeout(a4,5000);
		}else if(gambiarra1==7){
			time=setTimeout(a5,5000);
		}
	}


	function efetivo(atkel,iel,iel2){
		if(atkel=="Fogo"){		
			if(iel=="Planta"){
				efeito1=2;
			}else if(iel=="Fogo"){
				efeito1=0.5;
			}else if(iel=="Água"){
				efeito1=0.5;
			}else{
				efeito1=1;
			}
			if(iel2=="Planta"){
				efeito2=2;
			}else if(iel2=="Fogo"){
				efeito2=0.5;
			}else if(iel2=="Água"){
				efeito2=0.5;
			}else{
				efeito2=1;
			}
		}else if(atkel=="Água"){
			if(iel=="Planta"){
				efeito1=0.5;
			}else if(iel=="Fogo"){
				efeito1=2;
			}else if(iel=="Água"){
				efeito1=0.5;
			}else{
				efeito1=1;
			}
			if(iel2=="Planta"){
				efeito2=0.5;
			}else if(iel2=="Fogo"){
				efeito2=2;
			}else if(iel2=="Água"){
				efeito2=0.5;
			}else{
				efeito2=1;
			}
		}else if(atkel=="Planta"){
			if(iel=="Planta"){
				efeito1=0.5;
			}else if(iel=="Fogo"){
				efeito1=0.5;
			}else if(iel=="Água"){
				efeito1=2;
			}else{
				efeito1=1;
			}
			if(iel2=="Planta"){
				efeito2=0.5;
			}else if(iel2=="Fogo"){
				efeito2=0.5;
			}else if(iel2=="Água"){
				efeito2=2;
			}else{
				efeito2=1;
			}
		}else{
			efeito1=1;
			efeito2=1;
		} //normal
		efeitotot=efeito1*efeito2;
		return efeitotot;
	}
	function efeitinhos(oq,quanto,qm){
		KOROI=document.getElementById("batleit");
		if(oq>0){
			TROXO = document.createTextNode(" aumentou ");
			KOROI.append(TROXO);
		}else{
			TROXO = document.createTextNode(" diminuiu ");
			KOROI.append(TROXO);
		}
		if(qm=="voce"){
			if(oq==1){
				p.atual.atk[ind]=p.atual.atk[ind]+(p.atual.atk[ind]*quanto*0.5);
				TROXO = document.createTextNode("seu atk");
				KOROI.append(TROXO);
			}else if(oq==2){
				p.atual.atkesp[ind]=p.atual.atkesp[ind]+(p.atual.atkesp[ind]*quanto*0.5);
				TROXO = document.createTextNode("seu atk.esp");
				KOROI.append(TROXO);
			}else if(oq==3){
				p.atual.def[ind]=p.atual.def[ind]+(p.atual.def[ind]*quanto*0.5);
				TROXO = document.createTextNode("sua def");
				KOROI.append(TROXO);
			}else if(oq==4){
				p.atual.defesp[ind]=p.atual.defesp[ind]+(p.atual.defesp[ind]*quanto*0.5);
				TROXO = document.createTextNode("sua def.esp");
				KOROI.append(TROXO);
			}else if(oq==5){
				p.atual.spd[ind]=p.atual.spd[ind]+(p.atual.spd[ind]*quanto*0.5);
				TROXO = document.createTextNode("sua spd");
				KOROI.append(TROXO);
			}else if(oq== -1){
				i.atual.atk[indi]=i.atual.atk[indi]-(i.atual.atk[indi]*quanto*0.5);
				TROXO = document.createTextNode("o atk do adversário");
				KOROI.append(TROXO);
			}else if(oq== -2){
				i.atual.atkesp[indi]=i.atual.atkesp[indi]-(i.atual.atkesp[indi]*quanto*0.5);
				TROXO = document.createTextNode("o atk.esp do adversário");
				KOROI.append(TROXO);
			}else if(oq== -3){
				i.atual.def[indi]=i.atual.def[indi]-(i.atual.def[indi]*quanto*0.5);
				TROXO = document.createTextNode("a def do adversário");
				KOROI.append(TROXO);
			}else if(oq== -4){
				i.atual.defesp[indi]=i.atual.defesp[indi]-(i.atual.defesp[indi]*quanto*0.5);
				TROXO = document.createTextNode("a def.esp do adversário");
				KOROI.append(TROXO);
			}else if(oq== -5){
				i.atual.spd[indi]=i.atual.spd[indi]-(i.atual.spd[indi]*quanto*0.5);
				TROXO = document.createTextNode("a spd do adversário");
				KOROI.append(TROXO);
			}
		}else{
			if(oq==1){
				i.atual.atk[indi]=i.atual.atk[indi]+(i.atual.atk[indi]*quanto*0.5);
				TROXO = document.createTextNode("seu atk");
				KOROI.append(TROXO);
			}else if(oq==2){
				i.atual.atkesp[indi]=i.atual.atkesp[indi]+(i.atual.atkesp[indi]*quanto*0.5);
				TROXO = document.createTextNode("seu atk.esp");
				KOROI.append(TROXO);
			}else if(oq==3){
				i.atual.def[indi]=i.atual.def[indi]+(i.atual.def[indi]*quanto*0.5);
				TROXO = document.createTextNode("sua def");
				KOROI.append(TROXO);
			}else if(oq==4){
				i.atual.defesp[indi]=i.atual.defesp[indi]+(i.atual.defesp[indi]*quanto*0.5);
				TROXO = document.createTextNode("sua def.esp");
				KOROI.append(TROXO);
			}else if(oq==5){
				i.atual.spd[indi]=i.atual.spd[indi]+(i.atual.spd[indi]*quanto*0.5);
				TROXO = document.createTextNode("sua spd");
				KOROI.append(TROXO);
			}else if(oq== -1){
				p.atual.atk[ind]=p.atual.atk[ind]-(p.atual.atk[ind]*quanto*0.5);
				TROXO = document.createTextNode("o atk do adversário");
				KOROI.append(TROXO);
			}else if(oq== -2){
				p.atual.atkesp[ind]=p.atual.atkesp[ind]-(p.atual.atkesp[ind]*quanto*0.5);
				TROXO = document.createTextNode("o atk.esp do adversário");
				KOROI.append(TROXO);
			}else if(oq== -3){
				p.atual.def[ind]=p.atual.def[ind]-(p.atual.def[ind]*quanto*0.5);
				TROXO = document.createTextNode("a def do adversário");
				KOROI.append(TROXO);
			}else if(oq== -4){
				p.atual.defesp[ind]=p.atual.defesp[ind]-(p.atual.defesp[ind]*quanto*0.5);
				TROXO = document.createTextNode("a def.esp do adversário");
				KOROI.append(TROXO);
			}else if(oq== -5){
				p.atual.spd[ind]=p.atual.spd[ind]-(p.atual.spd[ind]*quanto*0.5);
				TROXO = document.createTextNode("a spd do adversário");
				KOROI.append(TROXO);
			}
		}
	}
	function calculo(atk,atkesp,def,defesp,pwr,cat,ef,qm){
		
		if(cat=="Fisico"){
			dano=(atk*ef*(pwr/100)-def);
		}else if(cat=="Especial"){
			dano=(atkesp*(pwr/100)-defesp);
		}
		if(dano<7 && cat!="Stats"){
			dano=7*ef;
		}else{
			dano=dano*ef;
		}
		chan=1+Math.floor(24*Math.random());
		if(chan>=24){
			dano=dano*1.5;
			mud=2;
		}		
		return dano;
	}


	var
	voce=0,
	estado={
		selecao:0,
		andando:1,
		batalhando:2
	},
	opbat=0,op=0,ind=0,indcap=0,indpc=0,indi=0,prec=0,din=1000000,pkb=0,gpkb=0,upkb=0,mpkb=0,heg=0,hem=0,hep=0,comp=0,cap=0,lug=0/*l*/,mei=0,gr=0,chan=0,mark=0,mud=0,
	esq={nome:0,cat:0,el:0,pp:0,pr:0,pwr:0},dano,time,controle=false,pcontrole=false,pccontrole=10,gambiarra1=0,gambiarra2=false,gambiarra3=false,gambiarracrit=false,

	p={
		perm:{id:[],nda:[],n:[],el:[],el2:[],rar:[],desv:[],pr:[],atk:[],atkesp:[],def:[],defesp:[],hp:[],spd:[],xpatk:[],xpatkesp:[],xpdef:[],xpdefesp:[],xphp:[],xpspd:[],
		atk1:{nome:[],cat:[],el:[],pp:[],pr:[],pwr:[]},atk2:{nome:[],cat:[],el:[],pp:[],pr:[],pwr:[]},atk3:{nome:[],cat:[],el:[],pp:[],pr:[],pwr:[]},atk4:{nome:[],cat:[],el:[],pp:[],pr:[],pwr:[]}},
		atual:{nome:[],el:[],el2:[],xp:[],nivel:[],ev:[],desv:[],pr:[],atk:[],atkesp:[],def:[],defesp:[],hp:[],spd:[],atk1:{nome:[],cat:[],el:[],pp:[],pr:[],pwr:[]},atk2:{nome:[],cat:[],el:[],pp:[],pr:[],pwr:[]},atk3:{nome:[],cat:[],el:[],pp:[],pr:[],pwr:[]},atk4:{nome:[],cat:[],el:[],pp:[],pr:[],pwr:[]}}
	},

	i={
		perm:{id:[],nda:[],n:[],el:[],el2:[],rar:[],desv:[],pr:[],atk:[],atkesp:[],def:[],defesp:[],hp:[],spd:[],xpatk:[],xpatkesp:[],xpdef:[],xpdefesp:[],xphp:[],xpspd:[],
		atk1:{nome:[],cat:[],el:[],pp:[],pr:[],pwr:[]},atk2:{nome:[],cat:[],el:[],pp:[],pr:[],pwr:[]},atk3:{nome:[],cat:[],el:[],pp:[],pr:[],pwr:[]},atk4:{nome:[],cat:[],el:[],pp:[],pr:[],pwr:[]}},
		atual:{nome:[],el:[],el2:[],xp:[],nivel:[],ev:[],desv:[],pr:[],atk:[],atkesp:[],def:[],defesp:[],hp:[],spd:[],atk1:{nome:[],cat:[],el:[],pp:[],pr:[],pwr:[]},atk2:{nome:[],cat:[],el:[],pp:[],pr:[],pwr:[]},atk3:{nome:[],cat:[],el:[],pp:[],pr:[],pwr:[]},atk4:{nome:[],cat:[],el:[],pp:[],pr:[],pwr:[]}}
	},

	pc={
		perm:{id:[],nda:[],n:[],el:[],el2:[],rar:[],desv:[],pr:[],atk:[],atkesp:[],def:[],defesp:[],hp:[],spd:[],xpatk:[],xpatkesp:[],xpdef:[],xpdefesp:[],xphp:[],xpspd:[],
		atk1:{nome:[],cat:[],el:[],pp:[],pr:[],pwr:[]},atk2:{nome:[],cat:[],el:[],pp:[],pr:[],pwr:[]},atk3:{nome:[],cat:[],el:[],pp:[],pr:[],pwr:[]},atk4:{nome:[],cat:[],el:[],pp:[],pr:[],pwr:[]}},
		atual:{nome:[],el:[],el2:[],xp:[],nivel:[],ev:[],desv:[],pr:[],atk:[],atkesp:[],def:[],defesp:[],hp:[],spd:[],atk1:{nome:[],cat:[],el:[],pp:[],pr:[],pwr:[]},atk2:{nome:[],cat:[],el:[],pp:[],pr:[],pwr:[]},atk3:{nome:[],cat:[],el:[],pp:[],pr:[],pwr:[]},atk4:{nome:[],cat:[],el:[],pp:[],pr:[],pwr:[]}}
	};

	//inicio
		p.perm.xpatk[ind]=0;
		p.perm.xpatkesp[ind]=0;
		p.perm.xpdef[ind]=0;
		p.perm.xpdefesp[ind]=0;
		p.perm.xphp[ind]=0;
		p.perm.xpspd[ind]=0;
		p.atual.nivel[ind]=1;
		p.atual.xp[ind]=200;
		p.perm.nda[ind]=0;
		i.perm.nda[indi]=0;
		pc.perm.nda[ind]=0;
		pkb=5;
		document.body.addEventListener("keydown",opcionar);
		function opcionar(event){
			var tecla=event.key;
			console.log(`${tecla}`);
			if(voce==estado.selecao){
				switch(tecla){
					case "1":
						p.perm.id[ind]=0;
						document.body.querySelector('p#enter').hidden=false;
					break;

					case "2":
						p.perm.id[ind]=3;
						document.body.querySelector('p#enter').hidden=false;
					break;

					case "3":
						p.perm.id[ind]=6;
						document.body.querySelector('p#enter').hidden=false;
					break;

					case "Enter":							
						if(!document.body.querySelector('p#enter').hidden){
							for(c=1;c<5;c++){
								sn();
							}
							gambiarra2=true;
							voce=estado.andando;
							document.body.querySelector('p#selecao').hidden=true;
							document.body.querySelector('p#andando').hidden=false;
							document.body.querySelector('p#mapa').hidden=false;
							document.body.querySelector('p#enter').hidden=true;
							passagem();
							cura();					
						}
					break;
				}
			}else if(voce==estado.andando){
				if(!document.body.querySelector('p#mapa').hidden){
					switch (tecla){
						case "ArrowUp":
							if(lug>0){
								lug--;
							}
							op=0;							
							opbat=undefined;
						break;
						case "ArrowDown":
							lug++;
							opbat=undefined;
							op=0;
						break;
						case "9":
								//trabalhar nisso depois
						break;
						}
				}
				document.getElementById("andando").innerText="Você:";
				KRAI=document.getElementById("andando");
				BAGUIONECESSARIO = document.createTextNode(lug);
				KRAI.append(BAGUIONECESSARIO);
				if(lug==1 && document.body.querySelector('p#cmm').hidden && document.body.querySelector('p#cmpc').hidden){
					switch(tecla){
						case "Enter":
						clearTimeout(time);
							if(op==0){								
								document.body.querySelector('p#cmc').hidden=true;
								document.body.querySelector('p#enter').hidden=true;
								document.body.querySelector('p#mapa').hidden=true;
								document.body.querySelector('p#andando').hidden=true;
								document.body.querySelector('p#cm').hidden=false;
							}else if(op==1){
								document.body.querySelector('p#enter').hidden=true;
								document.body.querySelector('p#cmc').hidden=false;
								cura();
								op=0;
								time=setTimeout(function (){
									document.body.querySelector('p#cmc').hidden=true;
									document.body.querySelector('p#cm').hidden=false;
									},3000);		
							}else if(op==2){
								indpc=undefined;
								document.body.querySelector('p#cmpc').innerText="";
								KOROI=document.getElementById("cmpc");
								for(pcop=0+pccontrole-10;pcop<pccontrole;pcop++){
									if(pc.perm.id[pcop]!=undefined){
										TROXO = document.createTextNode("("+pcop+")"+pc.atual.nome[pcop]);
										KOROI.append(TROXO);
										TROXO = document.createTextNode("-");
										KOROI.append(TROXO);
										TROXO = document.createTextNode(pc.atual.hp[pcop]);
										KOROI.append(TROXO);
										TROXO = document.createTextNode("/");
										KOROI.append(TROXO);
										TROXO = document.createTextNode(pc.perm.hp[pcop]);
										KOROI.append(TROXO);
										TROXO = document.createTextNode(" ");
										KOROI.append(TROXO);
									}
								}
								document.body.querySelector('p#op0').innerText="(0)";
						KOROI=document.getElementById("op0");
						TROXO=document.createTextNode(p.atual.nome[0]+"-");
						KOROI.append(TROXO);
						TROXO=document.createTextNode(p.atual.hp[0]);
						KOROI.append(TROXO);
						TROXO=document.createTextNode("/");
						KOROI.append(TROXO);
						TROXO=document.createTextNode(p.perm.hp[0]);
						KOROI.append(TROXO);
						if(p.atual.nome[1]!=undefined){
							document.body.querySelector('p#op1').innerText="(1)";
							KOROI=document.getElementById("op1");
							TROXO=document.createTextNode(p.atual.nome[1]+"-");
							KOROI.append(TROXO);
							TROXO=document.createTextNode(p.atual.hp[1]);
							KOROI.append(TROXO);
							TROXO=document.createTextNode("/");
							KOROI.append(TROXO);
							TROXO=document.createTextNode(p.perm.hp[1]);
							KOROI.append(TROXO);
						}
						if(p.atual.nome[2]!=undefined){
							document.body.querySelector('p#op2').innerText="(2)";
							KOROI=document.getElementById("op2");
							TROXO=document.createTextNode(p.atual.nome[2]+"-");
							KOROI.append(TROXO);
							TROXO=document.createTextNode(p.atual.hp[2]);
							KOROI.append(TROXO);
							TROXO=document.createTextNode("/");
							KOROI.append(TROXO);
							TROXO=document.createTextNode(p.perm.hp[2]);
							KOROI.append(TROXO);
						}
						if(p.atual.nome[3]!=undefined){
							document.body.querySelector('p#op3').innerText="(3)";
							KOROI=document.getElementById("op3");
							TROXO=document.createTextNode(p.atual.nome[3]+"-");
							KOROI.append(TROXO);
							TROXO=document.createTextNode(p.atual.hp[3]);
							KOROI.append(TROXO);
							TROXO=document.createTextNode("/");
							KOROI.append(TROXO);
							TROXO=document.createTextNode(p.perm.hp[3]);
							KOROI.append(TROXO);
						}
						if(p.atual.nome[4]!=undefined){
							document.body.querySelector('p#op4').innerText="(4)";
							KOROI=document.getElementById("op4");
							TROXO=document.createTextNode(p.atual.nome[4]+"-");
							KOROI.append(TROXO);
							TROXO=document.createTextNode(p.atual.hp[4]);
							KOROI.append(TROXO);
							TROXO=document.createTextNode("/");
							KOROI.append(TROXO);
							TROXO=document.createTextNode(p.perm.hp[4]);
							KOROI.append(TROXO);
						}
						if(p.atual.nome[5]!=undefined){
							document.body.querySelector('p#op5').innerText="(5)";
							KOROI=document.getElementById("op5");
							TROXO=document.createTextNode(p.atual.nome[5]+"-");
							KOROI.append(TROXO);
							TROXO=document.createTextNode(p.atual.hp[5]);
							KOROI.append(TROXO);
							TROXO=document.createTextNode("/");
							KOROI.append(TROXO);
							TROXO=document.createTextNode(p.perm.hp[5]);
							KOROI.append(TROXO);
						}
								document.body.querySelector('p#enter').hidden=true;
								document.body.querySelector('p#cm').hidden=true;
								document.body.querySelector('p#op0').hidden=false;
								document.body.querySelector('p#op1').hidden=false;
								document.body.querySelector('p#op2').hidden=false;
								document.body.querySelector('p#op3').hidden=false;
								document.body.querySelector('p#op4').hidden=false;
								document.body.querySelector('p#op5').hidden=false;
								document.body.querySelector('p#cmpc').hidden=false;
							}else if(op==3){
								document.body.querySelector('p#cmmd').innerText="Seu dinheiro:"
								KOROI=document.getElementById("cmmd");
								TROXO = document.createTextNode(din);
								KOROI.append(TROXO);
								TROXO = document.createTextNode("$");
								KOROI.append(TROXO);
								document.body.querySelector('p#enter').hidden=true;
								document.body.querySelector('p#cm').hidden=true;
								document.body.querySelector('p#cmmd').hidden=false;
								document.body.querySelector('p#cmm').hidden=false;
								document.body.querySelector('p#cmmc').hidden=false;
								document.body.querySelector('p#cmmcp').hidden=false;
								op=0;
								}
							else if(op==4){
								document.body.querySelector('p#enter').hidden=true;
								document.body.querySelector('p#mapa').hidden=false;
								document.body.querySelector('p#andando').hidden=false;
								document.body.querySelector('p#cm').hidden=true;
								op=0;
							}
						break;
						case "1":
							if(!document.body.querySelector('p#cm').hidden){
								document.body.querySelector('p#cmc').hidden=true;
								document.body.querySelector('p#cmmd').hidden=true;
								document.body.querySelector('p#cmm').hidden=true;
								document.body.querySelector('p#cmmc').hidden=true;
								document.body.querySelector('p#cmpc').hidden=true;
								op=1;
								document.body.querySelector('p#enter').hidden= false;
							}
						break;
						case "2":
							if(!document.body.querySelector('p#cm').hidden){
								document.body.querySelector('p#cmc').hidden=true;
								document.body.querySelector('p#cmmd').hidden=true;
								document.body.querySelector('p#cmm').hidden=true;
								document.body.querySelector('p#cmmc').hidden=true;
								document.body.querySelector('p#cmpc').hidden=true;
								op=2;
								document.body.querySelector('p#enter').hidden= false;
							}
						break;
						case "3":
							if(!document.body.querySelector('p#cm').hidden){
								document.body.querySelector('p#cmc').hidden=true;
								document.body.querySelector('p#cmmd').hidden=true;
								document.body.querySelector('p#cmm').hidden=true;
								document.body.querySelector('p#cmmc').hidden=true;
								document.body.querySelector('p#cmpc').hidden=true;
								op=3;
								document.body.querySelector('p#enter').hidden= false;
							}
						break;
						case "4":
							if(!document.body.querySelector('p#cm').hidden){
								document.body.querySelector('p#cmc').hidden=true;
								document.body.querySelector('p#cmmd').hidden=true;
								document.body.querySelector('p#cmm').hidden=true;
								document.body.querySelector('p#cmmc').hidden=true;
								document.body.querySelector('p#cmpc').hidden=true;
								op=4;
								document.body.querySelector('p#enter').hidden= false;
							}
						break;
					}
				}else if(!document.body.querySelector('p#cmm').hidden){
					switch(tecla){
						case "1":
							opbat=1;
							prec=200;
							KOROI=document.getElementById("cmmcp");
							document.body.querySelector('p#cmmcp').innerText="Produto:";
							TROXO = document.createTextNode("Pokeball ");
							KOROI.append(TROXO);	
						document.body.querySelector('p#cmmc').innerText="Quantos:"+comp+" Preço:"+comp*prec;						
						break;
						case "2":
							opbat=2;
							prec=600;
							KOROI=document.getElementById("cmmcp");
							document.body.querySelector('p#cmmcp').innerText="Produto:";
							TROXO = document.createTextNode("Greatball ");
							KOROI.append(TROXO);
						document.body.querySelector('p#cmmc').innerText="Quantos:"+comp+" Preço:"+comp*prec;	
						break;
						case "3":
							opbat=3;
							prec=1200;
							KOROI=document.getElementById("cmmcp");
							document.body.querySelector('p#cmmcp').innerText="Produto:";
							TROXO = document.createTextNode("Ultraball ");
							KOROI.append(TROXO);
						document.body.querySelector('p#cmmc').innerText="Quantos:"+comp+" Preço:"+comp*prec;	
						break;
						case "5":
							opbat=5;
							prec=500;
							KOROI=document.getElementById("cmmcp");
							document.body.querySelector('p#cmmcp').innerText="Produto:";
							TROXO = document.createTextNode("Healer pequeno ");
							KOROI.append(TROXO);
						document.body.querySelector('p#cmmc').innerText="Quantos:"+comp+" Preço:"+comp*prec;	
						break;
						case "4":
							opbat=4;
							prec=50000;
							KOROI=document.getElementById("cmmcp");
							document.body.querySelector('p#cmmcp').innerText="Produto:";
							TROXO = document.createTextNode("Masterball ");
							KOROI.append(TROXO);
						document.body.querySelector('p#cmmc').innerText="Quantos:"+comp+" Preço:"+comp*prec;	
						break;
						case "6":
							opbat=6;
							prec=1200;
							KOROI=document.getElementById("cmmcp");
							document.body.querySelector('p#cmmcp').innerText="Produto:";
							TROXO = document.createTextNode("Healer médio ");
							KOROI.append(TROXO);
						document.body.querySelector('p#cmmc').innerText="Quantos:"+comp+" Preço:"+comp*prec;	
						break;
						case "7":
							opbat=7;
							prec=2300;
							KOROI=document.getElementById("cmmcp");
							document.body.querySelector('p#cmmcp').innerText="Produto:";
							TROXO = document.createTextNode("Healer grande ");
							KOROI.append(TROXO);
							document.body.querySelector('p#cmmc').innerText="Quantos:"+comp+" Preço:"+comp*prec;	
						break;
						case "9":
							opbat=9;
						break;
						case "ArrowUp":
							comp=comp+1;
							document.body.querySelector('p#cmmc').innerText="Quantos:"+comp+" Preço:"+comp*prec;
						break;
						case "ArrowDown":
							comp=comp-1;
							document.body.querySelector('p#cmmc').innerText="Quantos:"+comp+" Preço:"+comp*prec;	
						break;
						case "Backspace":
							comp=0;
							document.body.querySelector('p#cmmc').innerText="Quantos:"+comp+" Preço:"+comp*prec;	
						break;
						case "Enter":
							if(opbat==9){
								document.body.querySelector('p#cm').hidden=false;
								document.body.querySelector('p#cmmd').hidden=true;
								document.body.querySelector('p#cmm').hidden=true;
								document.body.querySelector('p#cmmc').hidden=true;
								document.body.querySelector('p#cmmcp').hidden=true;
								opbat=undefined;
							}else if(din>=comp*prec && comp*prec>0){
								din=din-(comp*prec);
								document.body.querySelector('p#cmmd').innerText="Seu dinheiro:"
								KOROI=document.getElementById("cmmd");
								TROXO = document.createTextNode(din);
								KOROI.append(TROXO);
								TROXO = document.createTextNode("$");
								KOROI.append(TROXO);
								if(opbat==1){
									pkb=pkb+comp;	
								}else if(opbat==2){
									gpkb=gpkb+comp;
								}else if(opbat==3){
									upkb=upkb+comp;
								}else if(opbat==4){
									mpkb=mpkb+comp;
								}else if(opbat==5){
									hep=hep+comp;
								}else if(opbat==6){
									hem=hem+comp;
								}else if(opbat==7){
									heg=heg+comp;
								}
							}
						break;			
					}
				}else if(!document.body.querySelector('p#cmpc').hidden){
					if(indpc==undefined){
						switch(tecla){
							case "ArrowLeft":
								if(pccontrole>10){
									document.body.querySelector('p#cmpc').innerText="";
								KOROI=document.getElementById("cmpc");
									pccontrole=pccontrole-10;
									for(pcop=0+pcontrole-10;pcop<pccontrole;pcop++){
										if(pc.perm.id[pcop]!=undefined){
											TROXO = document.createTextNode(pc.atual.nome[pcop]);
											KOROI.append(TROXO);
											TROXO = document.createTextNode("-");
											KOROI.append(TROXO);
											TROXO = document.createTextNode(pc.atual.hp[pcop]);
											KOROI.append(TROXO);
											TROXO = document.createTextNode("/");
											KOROI.append(TROXO);
											TROXO = document.createTextNode(pc.perm.hp[pcop]);
											KOROI.append(TROXO);
											TROXO = document.createTextNode(" ");
											KOROI.append(TROXO);
										}
									}
								}
							break;
							case "ArrowRight":
								pccontrole=pccontrole+10;
								document.body.querySelector('p#cmpc').innerText="";
								KOROI=document.getElementById("cmpc");
								for(pcop=0+pcontrole-10;pcop<pccontrole;pcop++){
									if(pc.perm.id[pcop]!=undefined){
										TROXO = document.createTextNode("("+pcop+")"+pc.atual.nome[pcop]);
										KOROI.append(TROXO);
										TROXO = document.createTextNode("-");
										KOROI.append(TROXO);
										TROXO = document.createTextNode(pc.atual.hp[pcop]);
										KOROI.append(TROXO);
										TROXO = document.createTextNode("/");
										KOROI.append(TROXO);
										TROXO = document.createTextNode(pc.perm.hp[pcop]);
										KOROI.append(TROXO);
										TROXO = document.createTextNode(" ");
										KOROI.append(TROXO);
									}
								}
							break;
							case "Enter":
								if(pc.atual.nome[opbat]!=undefined){	
									document.body.querySelector('p#enter').hidden=true;
									indpc=opbat;
									opbat=undefined;
									KOROI=document.getElementById("pcop");
									TROXO = document.createTextNode("->");
									KOROI.append(TROXO);
									document.body.querySelector('p#pcop').hidden=false;
								}
							break;
							case "Backspace":
								document.body.querySelector('p#enter').hidden=true;
								document.body.querySelector('p#cm').hidden=false;
								document.body.querySelector('p#op0').hidden=true;
								document.body.querySelector('p#op1').hidden=true;
								document.body.querySelector('p#op2').hidden=true;
								document.body.querySelector('p#op3').hidden=true;
								document.body.querySelector('p#op4').hidden=true;
								document.body.querySelector('p#op5').hidden=true;
								document.body.querySelector('p#cmpc').hidden=true;
								document.body.querySelector('p#pcop').hidden=true;
							break;
							default:
								if(pc.atual.nome[tecla]!=undefined){
									opbat=tecla;
									document.body.querySelector('p#pcop').innerText=pc.atual.nome[tecla];
									document.body.querySelector('p#pcop').hidden=false;
								}	
							break;
								
						}
					}else{
						switch(tecla){
							case "Enter":
								document.body.querySelector('p#enter').hidden=true;
								document.body.querySelector('p#cm').hidden=false;
								document.body.querySelector('p#op0').hidden=true;
								document.body.querySelector('p#op1').hidden=true;
								document.body.querySelector('p#op2').hidden=true;
								document.body.querySelector('p#op3').hidden=true;
								document.body.querySelector('p#op4').hidden=true;
								document.body.querySelector('p#op5').hidden=true;
								document.body.querySelector('p#cmpc').hidden=true;
									document.body.querySelector('p#pcop').hidden=true;
								if(pc.perm.id[indpc]!=undefined){							
									KOROI=document.getElementById("pcop");
									TROXO = document.createTextNode(pc.atual.nome[indpc]);
									KOROI.append(TROXO);
									TROXO = document.createTextNode("->");
									KOROI.append(TROXO);
								}
								pcpassagem();
							break;
							case "Backspace":
									document.body.querySelector('p#enter').hidden=true;
								indpc=undefined;
								document.getElementById("pcop").innerText="";
							break;
							default:	
								if(p.perm.id[tecla]!=undefined){
									opbat=tecla;
									TROXO = document.createTextNode(p.atual.nome[tecla]);
									KOROI.append(TROXO);						
									document.body.querySelector('p#enter').hidden=false;
								}
							break;
						}
					}
				}else if((lug==2 || lug==4)){
					gr=Math.floor(1000*Math.random());
					i.atual.nivel[indi]=1+Math.floor(4*Math.random());
					if(gr<333){
						i.perm.id[indi]=0;			
					}else if(gr<666){
						i.perm.id[indi]=3;
					}else{
						i.perm.id[indi]=6;
					}
					if(op==0){
						i.perm.xpatk[indi]=0;
						i.perm.xpatkesp[indi]=0;
						i.perm.xpdef[indi]=0;
						i.perm.xpdefesp[indi]=0;
						i.perm.xphp[indi]=0;
						i.perm.xpspd[indi]=0;
						i.perm.nda[indi]=0;
						i.perm.atk1.nome[indi]=undefined;
						i.perm.atk1.cat[indi]=undefined;
						i.perm.atk1.el[indi]=undefined;
						i.perm.atk1.pp[indi]=undefined;
						i.perm.atk1.pr[indi]=undefined;
						i.perm.atk1.pwr[indi]=undefined;
						i.perm.atk2.nome[indi]=undefined;
						i.perm.atk2.cat[indi]=undefined;
						i.perm.atk2.el[indi]=undefined;
						i.perm.atk2.pp[indi]=undefined;
						i.perm.atk2.pr[indi]=undefined;
						i.perm.atk2.pwr[indi]=undefined;
						i.perm.atk3.nome[indi]=undefined;
						i.perm.atk3.cat[indi]=undefined;
						i.perm.atk3.el[indi]=undefined;
						i.perm.atk3.pp[indi]=undefined;
						i.perm.atk3.pr[indi]=undefined;
						i.perm.atk3.pwr[indi]=undefined;
						i.perm.atk4.nome[indi]=undefined;
						i.perm.atk4.cat[indi]=undefined;
						i.perm.atk4.el[indi]=undefined;
						i.perm.atk4.pp[indi]=undefined;
						i.perm.atk4.pr[indi]=undefined;
						i.perm.atk4.pwr[indi]=undefined;
						ipassagem();
						for(c=1;c<=i.atual.nivel[indi];c++){
							iaprender(c);
							inx0();
						}
						voce=estado.batalhando;
						ipassagem();
					}
				}//estar na grama
			}
			if(voce==estado.batalhando && document.body.querySelector('p#batleit').hidden && document.body.querySelector('p#mochila').hidden && (document.body.querySelector('p#op0').hidden)){
				document.body.querySelector('p#mapa').hidden= true;
				document.body.querySelector('p#andando').hidden= true;
				upfatebat();
				document.body.querySelector('p#batop').hidden= false;
				document.body.querySelector('p#bat').hidden= false;
				document.body.querySelector('p#batni').hidden= false;
				if(tecla=="Enter"){
					gambiarra3=false;
					controle=false;
					pcontrole=false;
					if(op==1){
						document.body.querySelector('p#enter').hidden= true;
						document.getElementById("batesq").innerText="(<-)";
						KOROI=document.getElementById("batesq");
						TROXO = document.createTextNode(p.atual.atk1.nome[ind]);
						KOROI.append(TROXO);
						if(p.atual.atk2.nome[ind]!=undefined){
							TROXO = document.createTextNode("(->)");
							KOROI.append(TROXO);
							TROXO = document.createTextNode(p.atual.atk2.nome[ind]);
							KOROI.append(TROXO);
						}
						if(p.atual.atk3.nome[ind]!=undefined){
							TROXO = document.createTextNode("(î)");
							KOROI.append(TROXO);
							TROXO = document.createTextNode(p.atual.atk3.nome[ind]);
							KOROI.append(TROXO);
						}
						if(p.atual.atk4.nome[ind]!=undefined){
							TROXO = document.createTextNode("(!)");
							KOROI.append(TROXO);
							TROXO = document.createTextNode(p.atual.atk4.nome[ind]);
							KOROI.append(TROXO);
						}
						document.body.querySelector('p#batesq').hidden=false;
						if(opbat=="<"){
							opbat=undefined;
							op=undefined;
							document.body.querySelector('p#batesq').hidden= true;
							if(p.atual.spd[ind]>=i.atual.spd[indi]){
								gambiarra1=1;
								esqoesc(p.atual.atk1,"voce");								
							}else{
								gambiarra1=2;
								esqoesc(randomatk_i(),"inimigo");
							}
						}else if(opbat==">"){
							opbat=undefined;
							op=undefined;
							document.body.querySelector('p#batesq').hidden= true;
							if(p.atual.spd[ind]>=i.atual.spd[indi]){
								gambiarra1=1;
								esqoesc(p.atual.atk2,"voce");
							}else{
								gambiarra1=3;
								esqoesc(randomatk_i(),"inimigo");
							}
						}else if(opbat=="^"){
							opbat=undefined;
							op=undefined;
							document.body.querySelector('p#batesq').hidden= true;
							if(p.atual.spd[ind]>=i.atual.spd[indi]){
								gambiarra1=1;
								esqoesc(p.atual.atk3,"voce");
							}else{
								gambiarra1=6;
								esqoesc(randomatk_i(),"inimigo");
							}
						}else if(opbat=="!"){
							opbat=undefined;
							op=undefined;
							document.body.querySelector('p#batesq').hidden= true;
							if(p.atual.spd[ind]>=i.atual.spd[indi]){
								gambiarra1=1;
								esqoesc(p.atual.atk4,"voce");
							}else{
								gambiarra1=7;
								esqoesc(randomatk_i(),"inimigo");
							}
						}
					}else if(op==2){
						document.body.querySelector('p#enter').hidden= true;
						
						document.body.querySelector('p#mopkb').innerText="(1)Pokeball:";
						KOROI=document.getElementById("mopkb");
						TROXO=document.createTextNode(pkb);
						KOROI.append(TROXO);
						
						document.body.querySelector('p#mogpkb').innerText="(2)Greatball:";
						KOROI=document.getElementById("mogpkb");
						TROXO=document.createTextNode(gpkb);
						KOROI.append(TROXO);
						
						document.body.querySelector('p#moupkb').innerText="(3)Ultraball:";
						KOROI=document.getElementById("moupkb");
						TROXO=document.createTextNode(upkb);
						KOROI.append(TROXO);
						
						document.body.querySelector('p#mompkb').innerText="(4)Masterball:";
						KOROI=document.getElementById("mompkb");
						TROXO=document.createTextNode(mpkb);
						KOROI.append(TROXO);
						
						document.body.querySelector('p#mohep').innerText="(5)Healer pequeno:";
						KOROI=document.getElementById("mohep");
						TROXO=document.createTextNode(hep);
						KOROI.append(TROXO);
						
						document.body.querySelector('p#mohem').innerText="(6)Healer médio:";
						KOROI=document.getElementById("mohem");
						TROXO=document.createTextNode(hem);
						KOROI.append(TROXO);
						
						document.body.querySelector('p#moheg').innerText="(7)Healer grande:";
						KOROI=document.getElementById("moheg");
						TROXO=document.createTextNode(heg);
						KOROI.append(TROXO);
						
						document.body.querySelector('p#batop').hidden=true;
						document.body.querySelector('p#mochila').hidden=false;
						document.body.querySelector('p#mopkb').hidden=false;
						document.body.querySelector('p#mogpkb').hidden=false;
						document.body.querySelector('p#moupkb').hidden=false;
						document.body.querySelector('p#mompkb').hidden=false;
						document.body.querySelector('p#mohep').hidden=false;
						document.body.querySelector('p#mohem').hidden=false;
						document.body.querySelector('p#moheg').hidden=false;
					}else if(op==3){
						document.body.querySelector('p#enter').hidden= true;						
						document.body.querySelector('p#op0').innerText="(0)";
						KOROI=document.getElementById("op0");
						TROXO=document.createTextNode(p.atual.nome[0]+"-");
						KOROI.append(TROXO);
						TROXO=document.createTextNode(p.atual.hp[0]);
						KOROI.append(TROXO);
						TROXO=document.createTextNode("/");
						KOROI.append(TROXO);
						TROXO=document.createTextNode(p.perm.hp[0]);
						KOROI.append(TROXO);
						if(p.atual.nome[1]!=undefined){
							document.body.querySelector('p#op1').innerText="(1)";
							KOROI=document.getElementById("op1");
							TROXO=document.createTextNode(p.atual.nome[1]+"-");
							KOROI.append(TROXO);
							TROXO=document.createTextNode(p.atual.hp[1]);
							KOROI.append(TROXO);
							TROXO=document.createTextNode("/");
							KOROI.append(TROXO);
							TROXO=document.createTextNode(p.perm.hp[1]);
							KOROI.append(TROXO);
						}
						if(p.atual.nome[2]!=undefined){
							document.body.querySelector('p#op2').innerText="(2)";
							KOROI=document.getElementById("op2");
							TROXO=document.createTextNode(p.atual.nome[2]+"-");
							KOROI.append(TROXO);
							TROXO=document.createTextNode(p.atual.hp[2]);
							KOROI.append(TROXO);
							TROXO=document.createTextNode("/");
							KOROI.append(TROXO);
							TROXO=document.createTextNode(p.perm.hp[2]);
							KOROI.append(TROXO);
						}
						if(p.atual.nome[3]!=undefined){
							document.body.querySelector('p#op3').innerText="(3)";
							KOROI=document.getElementById("op3");
							TROXO=document.createTextNode(p.atual.nome[3]+"-");
							KOROI.append(TROXO);
							TROXO=document.createTextNode(p.atual.hp[3]);
							KOROI.append(TROXO);
							TROXO=document.createTextNode("/");
							KOROI.append(TROXO);
							TROXO=document.createTextNode(p.perm.hp[3]);
							KOROI.append(TROXO);
						}
						if(p.atual.nome[4]!=undefined){
							document.body.querySelector('p#op4').innerText="(4)";
							KOROI=document.getElementById("op4");
							TROXO=document.createTextNode(p.atual.nome[4]+"-");
							KOROI.append(TROXO);
							TROXO=document.createTextNode(p.atual.hp[4]);
							KOROI.append(TROXO);
							TROXO=document.createTextNode("/");
							KOROI.append(TROXO);
							TROXO=document.createTextNode(p.perm.hp[4]);
							KOROI.append(TROXO);
						}
						if(p.atual.nome[5]!=undefined){
							document.body.querySelector('p#op5').innerText="(5)";
							KOROI=document.getElementById("op5");
							TROXO=document.createTextNode(p.atual.nome[5]+"-");
							KOROI.append(TROXO);
							TROXO=document.createTextNode(p.atual.hp[5]);
							KOROI.append(TROXO);
							TROXO=document.createTextNode("/");
							KOROI.append(TROXO);
							TROXO=document.createTextNode(p.perm.hp[5]);
							KOROI.append(TROXO);
						}
						
						document.body.querySelector('p#op0').hidden=false;
						document.body.querySelector('p#op1').hidden=false;
						document.body.querySelector('p#op2').hidden=false;
						document.body.querySelector('p#op3').hidden=false;
						document.body.querySelector('p#op4').hidden=false;
						document.body.querySelector('p#op5').hidden=false;
					}else if(op==4){
						document.body.querySelector('p#mochila').hidden=true;
						document.body.querySelector('p#mopkb').hidden=true;
						document.body.querySelector('p#mogpkb').hidden=true;
						document.body.querySelector('p#moupkb').hidden=true;
						document.body.querySelector('p#mompkb').hidden=true;
						document.body.querySelector('p#mohep').hidden=true;
						document.body.querySelector('p#mohem').hidden=true;
						document.body.querySelector('p#moheg').hidden=true;
						document.body.querySelector('p#enter').hidden= true;
						document.body.querySelector('p#mapa').hidden=false;
						document.body.querySelector('p#andando').hidden=false;
						document.body.querySelector('p#bat').hidden=true;
						document.body.querySelector('p#batni').hidden=true;
						document.body.querySelector('p#batop').hidden=true;
						voce=estado.andando;
					}
				}else if(tecla==1){
					op=1;
					opbat=undefined;
					document.body.querySelector('p#op0').hidden=true;
					document.body.querySelector('p#op1').hidden=true;
					document.body.querySelector('p#op2').hidden=true;
					document.body.querySelector('p#op3').hidden=true;
					document.body.querySelector('p#op4').hidden=true;
					document.body.querySelector('p#op5').hidden=true;
					document.body.querySelector('p#mochila').hidden=true;
					document.body.querySelector('p#mopkb').hidden=true;
					document.body.querySelector('p#mogpkb').hidden=true;
					document.body.querySelector('p#moupkb').hidden=true;
					document.body.querySelector('p#mompkb').hidden=true;
					document.body.querySelector('p#mohep').hidden=true;
					document.body.querySelector('p#mohem').hidden=true;
					document.body.querySelector('p#moheg').hidden=true;
					document.body.querySelector('p#batesq').hidden= true;
					document.body.querySelector('p#enter').hidden= false;
				}else if(tecla==2){
					op=2;
					opbat=undefined;
					document.body.querySelector('p#op0').hidden=true;
					document.body.querySelector('p#op1').hidden=true;
					document.body.querySelector('p#op2').hidden=true;
					document.body.querySelector('p#op3').hidden=true;
					document.body.querySelector('p#op4').hidden=true;
					document.body.querySelector('p#op5').hidden=true;
					document.body.querySelector('p#mochila').hidden=true;
					document.body.querySelector('p#mopkb').hidden=true;
					document.body.querySelector('p#mogpkb').hidden=true;
					document.body.querySelector('p#moupkb').hidden=true;
					document.body.querySelector('p#mompkb').hidden=true;
					document.body.querySelector('p#mohep').hidden=true;
					document.body.querySelector('p#mohem').hidden=true;
					document.body.querySelector('p#moheg').hidden=true;
					document.body.querySelector('p#batesq').hidden= true;
					document.body.querySelector('p#enter').hidden= false;
				}else if(tecla==3){
					op=3;
					opbat=undefined;
					document.body.querySelector('p#op0').hidden=true;
					document.body.querySelector('p#op1').hidden=true;
					document.body.querySelector('p#op2').hidden=true;
					document.body.querySelector('p#op3').hidden=true;
					document.body.querySelector('p#op4').hidden=true;
					document.body.querySelector('p#op5').hidden=true;
					document.body.querySelector('p#mochila').hidden=true;
					document.body.querySelector('p#mopkb').hidden=true;
					document.body.querySelector('p#mogpkb').hidden=true;
					document.body.querySelector('p#moupkb').hidden=true;
					document.body.querySelector('p#mompkb').hidden=true;
					document.body.querySelector('p#mohep').hidden=true;
					document.body.querySelector('p#mohem').hidden=true;
					document.body.querySelector('p#moheg').hidden=true;
					document.body.querySelector('p#batesq').hidden= true;
					document.body.querySelector('p#enter').hidden= false;
				}else if(tecla==4){
					document.body.querySelector('p#op0').hidden=true;
					document.body.querySelector('p#op1').hidden=true;
					document.body.querySelector('p#op2').hidden=true;
					document.body.querySelector('p#op3').hidden=true;
					document.body.querySelector('p#op4').hidden=true;
					document.body.querySelector('p#op5').hidden=true;
					document.body.querySelector('p#mochila').hidden=true;
					document.body.querySelector('p#mopkb').hidden=true;
					document.body.querySelector('p#mogpkb').hidden=true;
					document.body.querySelector('p#moupkb').hidden=true;
					document.body.querySelector('p#mompkb').hidden=true;
					document.body.querySelector('p#mohep').hidden=true;
					document.body.querySelector('p#mohem').hidden=true;
					document.body.querySelector('p#moheg').hidden=true;
					document.body.querySelector('p#batesq').hidden= true;
					op=4;
					document.body.querySelector('p#enter').hidden= false;
				}else if(tecla=="ArrowLeft" && p.atual.atk1.nome[ind]!=undefined && !document.body.querySelector('p#batesq').hidden){
					document.body.querySelector('p#enter').hidden= false;
					opbat="<";
				}else if(tecla=="ArrowRight" && p.atual.atk2.nome[ind]!=undefined && !document.body.querySelector('p#batesq').hidden){
					document.body.querySelector('p#enter').hidden= false;
					opbat=">";
				}else if(tecla=="ArrowUp" && p.atual.atk3.nome[ind]!=undefined && !document.body.querySelector('p#batesq').hidden){
					document.body.querySelector('p#enter').hidden= false;
					opbat="^";
				}else if(tecla=="ArrowDown" && p.atual.atk4.nome[ind]!=undefined && !document.body.querySelector('p#batesq').hidden){
					document.body.querySelector('p#enter').hidden= false;
					opbat="!";
				}
			}//estar em batalha
			else if(!document.body.querySelector('p#batleit').hidden){//leitura da batalha
				switch(tecla){
					case "Enter":
						clearTimeout(time);
						if(gambiarracrit){
							crit();
						}else if(gambiarra1==1){
							a1();
						}else if(gambiarra1==2){
							a2();
						}else if(gambiarra1==3){
							a3();
						}else if(gambiarra1==6){
							a4();
						}else if(gambiarra1==7){
							a5();
						}else if(gambiarra1==8){
							sla();
						}else if(gambiarra1==4){
							matou();
						}else if(gambiarra1==4.1){
							sn();
						}else if(gambiarra1==4.2){
							evo();
						}else if(gambiarra1==4.3){
							chegadexp();
						}else if(gambiarra1==4.4){
							aprender();
						}else if(gambiarra1==5){
							morreu();
						}
					break;
				}
			}else if(!document.body.querySelector('p#mochila').hidden){
				switch(tecla){
					case "1":
						opbat=1;
						document.body.querySelector('p#enter').hidden=false;
					break;
					case "2":
						opbat=2;
						document.body.querySelector('p#enter').hidden=false;
					break;
					case "3":
						opbat=3;
						document.body.querySelector('p#enter').hidden=false;
					break;
					case "4":
						opbat=4;
						document.body.querySelector('p#enter').hidden=false;
					break;
					case "5":
						opbat=5;
						document.body.querySelector('p#enter').hidden=false;
					break;
					case "6":
						opbat=6;
						document.body.querySelector('p#enter').hidden=false;
					break;
					case "7":
						opbat=7;
						document.body.querySelector('p#enter').hidden=false;
					break;
					case "9":
						opbat=9;
						document.body.querySelector('p#enter').hidden=false;
					break;
					case "Enter":
						if(opbat==1 && pkb>0){
							pkb=pkb-1;
							usar(1,1);
						}else if(opbat==2 && gpkb>0){
							gpkb=gpkb-1;
							usar(1,1.5);
						}else if(opbat==3 && upkb>0){
							upkb=upkb-1;
							usar(1,2);
						}else if(opbat==4 && mpkb>0){
							mpkb=mpkb-1;
							usar(1,-100);
						}else if(opbat==5 && hep>0){
							hep=hep-1;
							usar(2,20);
						}else if(opbat==6 && hem>0){
							hem=hem-1;
							usar(2,50);
						}else if(opbat==7 && heg>0){
							heg=heg-1;
							usar(2,150);
						}else if(opbat==9){
							opbat=undefined;
							document.body.querySelector('p#batop').hidden=false;
							document.body.querySelector('p#mochila').hidden=true;
							document.body.querySelector('p#mopkb').hidden=true;
							document.body.querySelector('p#mogpkb').hidden=true;
							document.body.querySelector('p#moupkb').hidden=true;
							document.body.querySelector('p#mompkb').hidden=true;
							document.body.querySelector('p#mohep').hidden=true;
							document.body.querySelector('p#mohem').hidden=true;
							document.body.querySelector('p#moheg').hidden=true;
							document.body.querySelector('p#enter').hidden=true;
						}
					break;
				}
			}else if(!document.body.querySelector('p#op0').hidden && voce==estado.batalhando){
				switch(tecla){
					case "0":
						opbat=0;
						document.body.querySelector('p#enter').hidden=false;
					break;
					case "1":
						opbat=1;
						document.body.querySelector('p#enter').hidden=false;
					break;
					case "2":
						opbat=2;
						document.body.querySelector('p#enter').hidden=false;
					break;
					case "3":
						opbat=3;
						document.body.querySelector('p#enter').hidden=false;
					break;
					case "4":
						opbat=4;
						document.body.querySelector('p#enter').hidden=false;
					break;
					case "5":
						opbat=5;
						document.body.querySelector('p#enter').hidden=false;
					break;
					case "Enter":
						if(p.atual.hp[opbat]>0){
							if(ind!=opbat){
								ind=opbat;
								sla();
							}
							document.body.querySelector('p#enter').hidden=true;
							upfatebat();
							document.body.querySelector('p#op0').hidden=true;
							document.body.querySelector('p#op1').hidden=true;
							document.body.querySelector('p#op2').hidden=true;
							document.body.querySelector('p#op3').hidden=true;
							document.body.querySelector('p#op4').hidden=true;
							document.body.querySelector('p#op5').hidden=true;
						}
					break;
				}
			}else if(!document.body.querySelector('p#aprendido').hidden){
				switch(tecla){
					case "ArrowLeft":
						opbat="<";
						document.body.querySelector('p#enter').hidden=false;
					break;
					case "ArrowRight":
						opbat=">";
						document.body.querySelector('p#enter').hidden=false;
					break;
					case "ArrowUp":
						opbat="î";
						document.body.querySelector('p#enter').hidden=false;
					break;
					case "ArrowDown":
						opbat="!";
						document.body.querySelector('p#enter').hidden=false;
					break;
					case "Backspace":
						p.perm.nda[ind]++;
						chegadexp();
					break;
					case "Enter":
						if(opbat=="<"){
							p.perm.atk1.nome[ind]=pkdx[p.perm.id[ind]].aprende[p.perm.nda[ind]].nome;
							p.perm.atk1.cat[ind]=pkdx[p.perm.id[ind]].aprende[p.perm.nda[ind]].cat;
							p.perm.atk1.el[ind]=pkdx[p.perm.id[ind]].aprende[p.perm.nda[ind]].el;
							p.perm.atk1.pp[ind]=pkdx[p.perm.id[ind]].aprende[p.perm.nda[ind]].pp;
							p.perm.atk1.pr[ind]=pkdx[p.perm.id[ind]].aprende[p.perm.nda[ind]].pr;
							p.perm.atk1.pwr[ind]=pkdx[p.perm.id[ind]].aprende[p.perm.nda[ind]].pwr;
							p.perm.nda[ind]++;
							chegadexp();
						}else if(opbat==">"){
							p.perm.atk2.nome[ind]=pkdx[p.perm.id[ind]].aprende[p.perm.nda[ind]].nome;
							p.perm.atk2.cat[ind]=pkdx[p.perm.id[ind]].aprende[p.perm.nda[ind]].cat;
							p.perm.atk2.el[ind]=pkdx[p.perm.id[ind]].aprende[p.perm.nda[ind]].el;
							p.perm.atk2.pp[ind]=pkdx[p.perm.id[ind]].aprende[p.perm.nda[ind]].pp;
							p.perm.atk2.pr[ind]=pkdx[p.perm.id[ind]].aprende[p.perm.nda[ind]].pr;
							p.perm.atk2.pwr[ind]=pkdx[p.perm.id[ind]].aprende[p.perm.nda[ind]].pwr;
							p.perm.nda[ind]++;
							chegadexp();
						}else if(opbat=="î"){
							p.perm.atk3.nome[ind]=pkdx[p.perm.id[ind]].aprende[p.perm.nda[ind]].nome;
							p.perm.atk3.cat[ind]=pkdx[p.perm.id[ind]].aprende[p.perm.nda[ind]].cat;
							p.perm.atk3.el[ind]=pkdx[p.perm.id[ind]].aprende[p.perm.nda[ind]].el;
							p.perm.atk3.pp[ind]=pkdx[p.perm.id[ind]].aprende[p.perm.nda[ind]].pp;
							p.perm.atk3.pr[ind]=pkdx[p.perm.id[ind]].aprende[p.perm.nda[ind]].pr;
							p.perm.atk3.pwr[ind]=pkdx[p.perm.id[ind]].aprende[p.perm.nda[ind]].pwr;
							p.perm.nda[ind]++;
							chegadexp();
						}else if(opbat=="!"){
							p.perm.atk4.nome[ind]=pkdx[p.perm.id[ind]].aprende[p.perm.nda[ind]].nome;
							p.perm.atk4.cat[ind]=pkdx[p.perm.id[ind]].aprende[p.perm.nda[ind]].cat;
							p.perm.atk4.el[ind]=pkdx[p.perm.id[ind]].aprende[p.perm.nda[ind]].el;
							p.perm.atk4.pp[ind]=pkdx[p.perm.id[ind]].aprende[p.perm.nda[ind]].pp;
							p.perm.atk4.pr[ind]=pkdx[p.perm.id[ind]].aprende[p.perm.nda[ind]].pr;
							p.perm.atk4.pwr[ind]=pkdx[p.perm.id[ind]].aprende[p.perm.nda[ind]].pwr;
							p.perm.nda[ind]++;
							chegadexp();
						}
						passagem();
					break;
				}
			}
		}
