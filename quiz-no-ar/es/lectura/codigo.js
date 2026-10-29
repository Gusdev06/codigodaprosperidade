/* La Oración de los 3 Arcanos — gerador compartilhado entre a leitura (/es/lectura/, versão trancada)
   e a entrega (/es/mi-codigo/, versão completa). Mesmos dados nos dois lados: nome, data, bloqueio e desejo. */
(function(){
  var CARTAS={torre:'La Torre',louco:'El Loco',roda:'La Rueda de la Fortuna'};
  var TIRAGEM={fuga:['louco','torre','roda'],imprevisto:['louco','torre','roda'],alcanza:['torre','roda','louco'],estancado:['torre','louco','roda']};
  var MESES=['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
  var PASADO={torre:'suelto los golpes que me obligaron a empezar de cero una y otra vez',louco:'suelto el miedo que me dejaron las decisiones que nadie entendió',roda:'suelto la idea de que lo bueno que se fue ya no regresa'};
  var PRESENTE={torre:'que caiga hoy lo que está mal construido y que se cierre la puerta por donde se escapa mi dinero',roda:'que la rueda gire a mi favor y que mi esfuerzo por fin sea recompensado',louco:'que se abra el camino nuevo que todavía no alcanzo a ver'};
  var FUTURO={roda:'abro mis manos para recibir la abundancia que ya gira hacia mí',louco:'recibo el comienzo nuevo y las oportunidades que vienen en camino',torre:'que lo que me frena caiga para siempre y deje espacio a lo nuevo'};
  var DESEJO={deudas:'pagar todas mis deudas',casa:'tener mi casa propia',familia:'darle tranquilidad a mi familia',libertad:'dejar de vivir con angustia a fin de mes'};

  function reduz(n){ while(n>9){ n=String(n).split('').reduce(function(s,c){return s+ +c},0); } return n||9; }
  function numero(r){ return reduz(String(r.dia)+String(r.mes)+String(r.ano)); }
  function tiragem(r){ return TIRAGEM[r.bloqueio]||TIRAGEM.alcanza; }

  /* dias cujo número reduzido é o número de destino (n, n+9, n+18, n+27), a partir de hoje; completa com o mês seguinte */
  function dias(r,hoje){
    var n=numero(r), h=hoje||new Date(), out=[], y=h.getFullYear(), m=h.getMonth();
    for(var volta=0; volta<2 && out.length<3; volta++){
      var mm=(m+volta)%12, yy=y+Math.floor((m+volta)/12), fimMes=new Date(yy,mm+1,0).getDate();
      for(var d=n; d<=fimMes && out.length<3; d+=9){
        if(volta===0 && d<h.getDate()) continue;
        out.push({dia:d, mes:mm, txt:d+' de '+MESES[mm]});
      }
    }
    return out;
  }

  function oracion(r){
    var t=tiragem(r), n=numero(r);
    return [
      'Yo, '+r.nome+', me presento con fe ante mis tres arcanos.',
      'Por '+CARTAS[t[0]]+', '+PASADO[t[0]]+'.',
      'Por '+CARTAS[t[1]]+', pido '+PRESENTE[t[1]]+'.',
      'Por '+CARTAS[t[2]]+', '+FUTURO[t[2]]+'.',
      'Con mi número '+n+' sello este pedido: que el dinero que es mío por derecho encuentre el camino hasta mis manos, que llegue a mi casa y se quede, y que nadie lo detenga con envidia ni con malas palabras.',
      (DESEJO[r.desejo]?'Te pido la fuerza para '+DESEJO[r.desejo]+'. ':'')+'Así lo pido, así lo recibo y así será. Amén.'
    ];
  }

  function ritual(r){
    var ds=dias(r).map(function(x){return x.txt});
    return [
      'Elige un lugar tranquilo de tu casa. Pon una vela blanca o dorada y, junto a ella, un vaso con agua.',
      'Escribe en un papel lo que más deseas'+(DESEJO[r.desejo]?' ('+DESEJO[r.desejo]+')':'')+' y déjalo debajo del vaso.',
      'Enciende la vela, mira la llama y reza tu Oración de los 3 Arcanos tres veces, despacio.',
      'Apaga la vela sin soplar (con un plato o con los dedos húmedos). Repite siete noches seguidas.',
      'En tus días de apertura'+(ds.length?' ('+ds.join(', ')+')':'')+', reza la oración siete veces y deja una moneda junto a la vela.',
      'La séptima noche, tira el agua del vaso en la puerta de tu casa, hacia afuera, y guarda el papel en tu cartera.'
    ];
  }

  window.CP={CARTAS:CARTAS,MESES:MESES,numero:numero,tiragem:tiragem,dias:dias,oracion:oracion,ritual:ritual};
})();
