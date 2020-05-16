export default function parseTwitterDate(tdate) {
  var systemDate = new Date(Date.parse(tdate));
  var userDate = new Date();
  var diff = Math.floor((userDate - systemDate) / 1000);
  if (diff <= 1) {return 'Agora mesmo';}
  if (diff < 20) {return diff + ' segundos atrás';}
  if (diff < 40) {return 'meio minuto atrás';}
  if (diff < 60) {return 'menos que um minuto atrás';}
  if (diff <= 90) {return 'um minuto atrás';}
  if (diff <= 3540) {return Math.round(diff / 60) + ' minutos atrás';}
  if (diff <= 5400) {return '1 hora atrás';}
  if (diff <= 86400) {return Math.round(diff / 3600) + ' horas atrás';}
  if (diff <= 129600) {return '1 dia atrás';}
  if (diff < 604800) {return Math.round(diff / 86400) + ' dias atrás';}
  if (diff <= 777600) {return 'uma semana atrás';}
  return 'em ' + systemDate;
}