function _0x2755(){const _0x13be1b=['.webp','.png?background=','Erreur\x20lors\x20de\x20la\x20récupération\x20du\x20lien\x20de\x20la\x20vidéo','6713280XgOkqW','Fichier\x20non\x20existant','crop','Please\x20mention\x20an\x20image\x20or\x20video!','8hjVuUT','unlinkSync','includes','quotedMessage','633UhiKAE','image','235996NxtSMh','form-data','Conversion','existsSync','floor','downloadAndSaveMediaMessage','scrop','12148xoMyNE','random','join','readFileSync','1049420kyMXtQ','from','photo','write','message','data','CROPPED','child_process','Uh\x20media\x20please','Hacking-Md','👨🏿‍💻','src','Error\x20uploading\x20to\x20Imgur\x20:','make\x20sure\x20to\x20mention\x20the\x20media','wa-sticker-formatter','fs-extra','FULL','error','Opps\x20error','append','log','videoMessage','sticker','toBuffer','imageMessage','Mention\x20a\x20texte\x20Message','post','.png','url','2680173IUzbrP','(eg\x20:\x20trt\x20en)','extendedTextMessage','@whiskeysockets/baileys','Um\x20mention\x20a\x20non-animated\x20sticker','trt','stickerMessage','axios','sendMessage','Client-ID\x20','mention\x20a\x20image\x20or\x20video','12345','file','contextInfo','getHeaders','25230aVyFoz','toFile','createReadStream','stringify','concat','A\x20non-animated\x20sticker\x20please','9799230LLxDYb','2185BBwHnc','video','https://telegra.ph','transparent','conversation'];_0x2755=function(){return _0x13be1b;};return _0x2755();}const _0x2b44e2=_0x278d;(function(_0x11f27b,_0x2d8bee){const _0x5cdb99=_0x278d,_0x34d011=_0x11f27b();while(!![]){try{const _0x1fabc3=parseInt(_0x5cdb99(0x12d))/0x1+parseInt(_0x5cdb99(0x138))/0x2+-parseInt(_0x5cdb99(0x12b))/0x3*(parseInt(_0x5cdb99(0x134))/0x4)+-parseInt(_0x5cdb99(0x11b))/0x5*(-parseInt(_0x5cdb99(0x114))/0x6)+-parseInt(_0x5cdb99(0x11a))/0x7+-parseInt(_0x5cdb99(0x127))/0x8*(parseInt(_0x5cdb99(0x105))/0x9)+parseInt(_0x5cdb99(0x123))/0xa;if(_0x1fabc3===_0x2d8bee)break;else _0x34d011['push'](_0x34d011['shift']());}catch(_0x16fc92){_0x34d011['push'](_0x34d011['shift']());}}}(_0x2755,0xe3535));const {Sticker,createSticker,StickerTypes}=require(_0x2b44e2(0x146)),{zokou}=require('../framework/zokou'),traduire=require('../framework/traduction'),{downloadMediaMessage,downloadContentFromMessage}=require(_0x2b44e2(0x108)),fs=require(_0x2b44e2(0x147)),axios=require(_0x2b44e2(0x10c)),FormData=require(_0x2b44e2(0x12e)),{exec}=require(_0x2b44e2(0x13f));async function uploadToTelegraph(_0x32fed5){const _0x5059ca=_0x2b44e2;if(!fs[_0x5059ca(0x130)](_0x32fed5))throw new Error(_0x5059ca(0x124));try{const _0x30b2f3=new FormData();_0x30b2f3['append'](_0x5059ca(0x111),fs[_0x5059ca(0x116)](_0x32fed5));const {data:_0x28f950}=await axios[_0x5059ca(0x152)]('https://telegra.ph/upload',_0x30b2f3,{'headers':{..._0x30b2f3[_0x5059ca(0x113)]()}});if(_0x28f950&&_0x28f950[0x0]&&_0x28f950[0x0][_0x5059ca(0x143)])return _0x5059ca(0x11d)+_0x28f950[0x0][_0x5059ca(0x143)];else throw new Error(_0x5059ca(0x122));}catch(_0x1972fd){throw new Error(String(_0x1972fd));}}function _0x278d(_0x484a73,_0x4968b7){const _0x27558b=_0x2755();return _0x278d=function(_0x278d41,_0x2b5449){_0x278d41=_0x278d41-0x105;let _0x326bc6=_0x27558b[_0x278d41];return _0x326bc6;},_0x278d(_0x484a73,_0x4968b7);}zokou({'nomCom':_0x2b44e2(0x14e),'categorie':_0x2b44e2(0x12f),'reaction':'👨🏿‍💻'},async(_0x278478,_0x3f9a1d,_0xd5d408)=>{const _0x4cbca8=_0x2b44e2;let {ms:_0x468792,mtype:_0x5cec37,arg:_0x5e2096,repondre:_0x150c62,nomAuteurMessage:_0x487003}=_0xd5d408;var _0x3fc11a=JSON[_0x4cbca8(0x117)](_0x468792[_0x4cbca8(0x13c)]),_0x39de2c=_0x5cec37===_0x4cbca8(0x150)||_0x5cec37===_0x4cbca8(0x14d),_0x1041b8=_0x5cec37==='extendedTextMessage'&&_0x3fc11a[_0x4cbca8(0x129)](_0x4cbca8(0x150)),_0x2b8df6=_0x5cec37===_0x4cbca8(0x107)&&_0x3fc11a['includes']('videoMessage');const _0x37799e=_0x358fe3=>{const _0x4a8382=_0x4cbca8;return''+Math[_0x4a8382(0x131)](Math[_0x4a8382(0x135)]()*0x2710)+_0x358fe3;},_0x1a7e5f=_0x37799e(_0x4cbca8(0x120));if(_0x5cec37==='imageMessage'||_0x1041b8){let _0x5cb142;_0x468792[_0x4cbca8(0x13c)]['imageMessage']?_0x5cb142=_0x468792[_0x4cbca8(0x13c)][_0x4cbca8(0x150)]:_0x5cb142=_0x468792[_0x4cbca8(0x13c)][_0x4cbca8(0x107)][_0x4cbca8(0x112)][_0x4cbca8(0x12a)][_0x4cbca8(0x150)];const _0x21565f=await downloadContentFromMessage(_0x5cb142,'image');let _0x447990=Buffer[_0x4cbca8(0x139)]([]);for await(const _0x226972 of _0x21565f){_0x447990=Buffer['concat']([_0x447990,_0x226972]);}sticker=new Sticker(_0x447990,{'pack':_0x4cbca8(0x141),'author':_0x487003,'type':_0x5e2096[_0x4cbca8(0x129)](_0x4cbca8(0x125))||_0x5e2096[_0x4cbca8(0x129)]('c')?StickerTypes[_0x4cbca8(0x13e)]:StickerTypes[_0x4cbca8(0x148)],'quality':0x64});}else{if(_0x5cec37===_0x4cbca8(0x14d)||_0x2b8df6){let _0x49f9a5;_0x468792[_0x4cbca8(0x13c)][_0x4cbca8(0x14d)]?_0x49f9a5=_0x468792[_0x4cbca8(0x13c)][_0x4cbca8(0x14d)]:_0x49f9a5=_0x468792[_0x4cbca8(0x13c)]['extendedTextMessage'][_0x4cbca8(0x112)][_0x4cbca8(0x12a)][_0x4cbca8(0x14d)];const _0x14919c=await downloadContentFromMessage(_0x49f9a5,_0x4cbca8(0x11c));let _0x11c4aa=Buffer['from']([]);for await(const _0x351ed4 of _0x14919c){_0x11c4aa=Buffer[_0x4cbca8(0x118)]([_0x11c4aa,_0x351ed4]);}sticker=new Sticker(_0x11c4aa,{'pack':_0x4cbca8(0x141),'author':_0x487003,'type':_0x5e2096[_0x4cbca8(0x129)]('-r')||_0x5e2096[_0x4cbca8(0x129)]('-c')?StickerTypes[_0x4cbca8(0x13e)]:StickerTypes[_0x4cbca8(0x148)],'quality':0x28});}else{_0x150c62(_0x4cbca8(0x126));return;}}await sticker[_0x4cbca8(0x115)](_0x1a7e5f),await _0x3f9a1d[_0x4cbca8(0x10d)](_0x278478,{'sticker':fs[_0x4cbca8(0x137)](_0x1a7e5f)},{'quoted':_0x468792});try{fs[_0x4cbca8(0x128)](_0x1a7e5f);}catch(_0x3ff0d4){console[_0x4cbca8(0x14c)](_0x3ff0d4);}}),zokou({'nomCom':_0x2b44e2(0x133),'categorie':'Conversion','reaction':_0x2b44e2(0x142)},async(_0x3a494a,_0x2faafe,_0x140339)=>{const _0x5bff78=_0x2b44e2,{ms:_0x19d502,msgRepondu:_0x5d9b0b,arg:_0x137ca0,repondre:_0x500b59,nomAuteurMessage:_0x5bda85}=_0x140339;if(!_0x5d9b0b){_0x500b59(_0x5bff78(0x145));return;};!_0x137ca0[0x0]?pack=_0x5bda85:pack=_0x137ca0[_0x5bff78(0x136)]('\x20');;if(_0x5d9b0b[_0x5bff78(0x150)])mediamsg=_0x5d9b0b[_0x5bff78(0x150)];else{if(_0x5d9b0b[_0x5bff78(0x14d)])mediamsg=_0x5d9b0b[_0x5bff78(0x14d)];else{if(_0x5d9b0b['stickerMessage'])mediamsg=_0x5d9b0b['stickerMessage'];else{_0x500b59(_0x5bff78(0x140));return;}}};var _0x2d7182=await _0x2faafe['downloadAndSaveMediaMessage'](mediamsg);let _0x2acfc4=new Sticker(_0x2d7182,{'pack':pack,'type':StickerTypes[_0x5bff78(0x13e)],'categories':['🤩','🎉'],'id':_0x5bff78(0x110),'quality':0x46,'background':'transparent'});const _0x163b94=await _0x2acfc4[_0x5bff78(0x14f)]();_0x2faafe[_0x5bff78(0x10d)](_0x3a494a,{'sticker':_0x163b94},{'quoted':_0x19d502});}),zokou({'nomCom':'take','categorie':_0x2b44e2(0x12f),'reaction':_0x2b44e2(0x142)},async(_0x55bb4e,_0x1c67d9,_0x3c7c2c)=>{const _0x3b059d=_0x2b44e2,{ms:_0x4ab8be,msgRepondu:_0x47f28d,arg:_0x1bdfcd,repondre:_0x38a397,nomAuteurMessage:_0x3b696c}=_0x3c7c2c;if(!_0x47f28d){_0x38a397(_0x3b059d(0x145));return;};!_0x1bdfcd[0x0]?pack=_0x3b696c:pack=_0x1bdfcd[_0x3b059d(0x136)]('\x20');;if(_0x47f28d['imageMessage'])mediamsg=_0x47f28d[_0x3b059d(0x150)];else{if(_0x47f28d[_0x3b059d(0x14d)])mediamsg=_0x47f28d[_0x3b059d(0x14d)];else{if(_0x47f28d['stickerMessage'])mediamsg=_0x47f28d['stickerMessage'];else{_0x38a397('Uh\x20a\x20media\x20please');return;}}};var _0x432bd6=await _0x1c67d9['downloadAndSaveMediaMessage'](mediamsg);let _0x3ec03a=new Sticker(_0x432bd6,{'pack':pack,'type':StickerTypes[_0x3b059d(0x148)],'categories':['🤩','🎉'],'id':_0x3b059d(0x110),'quality':0x46,'background':_0x3b059d(0x11e)});const _0x4c61d8=await _0x3ec03a[_0x3b059d(0x14f)]();_0x1c67d9[_0x3b059d(0x10d)](_0x55bb4e,{'sticker':_0x4c61d8},{'quoted':_0x4ab8be});}),zokou({'nomCom':_0x2b44e2(0x13b),'categorie':_0x2b44e2(0x12f),'reaction':_0x2b44e2(0x142)},async(_0x429ea3,_0x4ab161,_0x7e4454)=>{const _0x3a3ba9=_0x2b44e2,{ms:_0x33fba2,msgRepondu:_0x3cef6c,arg:_0x309d14,repondre:_0x38505e,nomAuteurMessage:_0x477df7}=_0x7e4454;if(!_0x3cef6c){_0x38505e('Please\x20mention\x20an\x20image');return;}if(!_0x3cef6c[_0x3a3ba9(0x150)]){_0x38505e('The\x20command\x20only\x20works\x20with\x20images');return;};text=_0x309d14[_0x3a3ba9(0x136)]('\x20');if(!text||text===null){_0x38505e('Make\x20sure\x20to\x20insert\x20text');return;};const _0x5b7e73=_0x3cef6c['imageMessage'],_0x10cd7f=await _0x4ab161[_0x3a3ba9(0x132)](_0x5b7e73),_0x4a5be0=new FormData();_0x4a5be0[_0x3a3ba9(0x14b)](_0x3a3ba9(0x12c),fs[_0x3a3ba9(0x116)](_0x10cd7f));const _0x1a5c31='b40a1820d63cd4e',_0x385fce={'Authorization':_0x3a3ba9(0x10e)+_0x1a5c31,..._0x4a5be0[_0x3a3ba9(0x113)]()},_0x992161={'method':'post','maxBodyLength':Infinity,'url':'https://api.imgur.com/3/image','headers':_0x385fce,'data':_0x4a5be0};try{const _0x549126=await axios(_0x992161),_0x139375=_0x549126[_0x3a3ba9(0x13d)][_0x3a3ba9(0x13d)]['link'];console[_0x3a3ba9(0x14c)](_0x139375);const _0x2d073a='https://api.memegen.link/images/custom/-/'+text+_0x3a3ba9(0x121)+_0x139375,_0x680fe8=new Sticker(_0x2d073a,{'pack':_0x477df7,'author':_0x3a3ba9(0x141),'type':StickerTypes[_0x3a3ba9(0x148)],'categories':['🤩','🎉'],'id':_0x3a3ba9(0x110),'quality':0x46,'background':_0x3a3ba9(0x11e)}),_0x1836d0=await _0x680fe8[_0x3a3ba9(0x14f)]();_0x4ab161[_0x3a3ba9(0x10d)](_0x429ea3,{'sticker':_0x1836d0},{'quoted':_0x33fba2});}catch(_0x30ac00){console[_0x3a3ba9(0x149)](_0x3a3ba9(0x144),_0x30ac00),_0x38505e('An\x20error\x20occurred\x20while\x20creating\x20the\x20meme.');}}),zokou({'nomCom':_0x2b44e2(0x13a),'categorie':_0x2b44e2(0x12f),'reaction':_0x2b44e2(0x142)},async(_0x3f376e,_0x422564,_0x4609b6)=>{const _0x285f22=_0x2b44e2,{ms:_0x488995,msgRepondu:_0x1327b9,arg:_0x2a46da,repondre:_0x4ebee3,nomAuteurMessage:_0x2f6876}=_0x4609b6;if(!_0x1327b9){_0x4ebee3('make\x20sure\x20to\x20mention\x20the\x20media');return;};if(!_0x1327b9['stickerMessage']){_0x4ebee3(_0x285f22(0x109));return;};let _0x3af033=await _0x422564[_0x285f22(0x132)](_0x1327b9[_0x285f22(0x10b)]);const _0x2728ef=_0x22b7bc=>{const _0x637853=_0x285f22;return''+Math['floor'](Math[_0x637853(0x135)]()*0x2710)+_0x22b7bc;};let _0x5d21b5=await _0x2728ef(_0x285f22(0x153));exec('ffmpeg\x20-i\x20'+_0x3af033+'\x20'+_0x5d21b5,_0x3fe6af=>{const _0x1b9658=_0x285f22;fs[_0x1b9658(0x128)](_0x3af033);if(_0x3fe6af){_0x422564[_0x1b9658(0x10d)](_0x3f376e,{'text':_0x1b9658(0x119)},{'quoted':_0x488995});return;}let _0x66230a=fs[_0x1b9658(0x137)](_0x5d21b5);_0x422564[_0x1b9658(0x10d)](_0x3f376e,{'image':_0x66230a},{'quoted':_0x488995}),fs[_0x1b9658(0x128)](_0x5d21b5);});}),zokou({'nomCom':_0x2b44e2(0x10a),'categorie':'Conversion','reaction':_0x2b44e2(0x142)},async(_0x3664d0,_0x4aa057,_0x9f971b)=>{const _0x163e39=_0x2b44e2,{msgRepondu:_0x3fdf52,repondre:_0x27f76c,arg:_0x2afefe}=_0x9f971b;if(_0x3fdf52)try{if(!_0x2afefe||!_0x2afefe[0x0]){_0x27f76c(_0x163e39(0x106));return;}let _0x58c221=await traduire(_0x3fdf52[_0x163e39(0x11f)],{'to':_0x2afefe[0x0]});_0x27f76c(_0x58c221);}catch(_0x3108c6){_0x27f76c(_0x163e39(0x151));}else _0x27f76c(_0x163e39(0x151));}),zokou({'nomCom':_0x2b44e2(0x154),'categorie':_0x2b44e2(0x12f),'reaction':_0x2b44e2(0x142)},async(_0x328397,_0x464030,_0x215551)=>{const _0x5ce2b4=_0x2b44e2,{msgRepondu:_0x5cdcb5,repondre:_0x8c0eb0}=_0x215551;if(!_0x5cdcb5){_0x8c0eb0(_0x5ce2b4(0x10f));return;}let _0x43f17c;if(_0x5cdcb5[_0x5ce2b4(0x14d)])_0x43f17c=await _0x464030['downloadAndSaveMediaMessage'](_0x5cdcb5[_0x5ce2b4(0x14d)]);else{if(_0x5cdcb5[_0x5ce2b4(0x150)])_0x43f17c=await _0x464030[_0x5ce2b4(0x132)](_0x5cdcb5[_0x5ce2b4(0x150)]);else{_0x8c0eb0('mention\x20a\x20image\x20or\x20video');return;}}try{const _0x1cfd16=await uploadToTelegraph(_0x43f17c);fs[_0x5ce2b4(0x128)](_0x43f17c),_0x8c0eb0(_0x1cfd16);}catch(_0x1accd5){console['error']('Erreur\x20lors\x20de\x20la\x20création\x20du\x20lien\x20Telegraph\x20:',_0x1accd5),_0x8c0eb0(_0x5ce2b4(0x14a));}});