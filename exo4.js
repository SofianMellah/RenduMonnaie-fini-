function Rendu () {
    let sommeClient = document.getElementById("SommeClient").value
    let montantTicket = document.getElementById("Montantticket").value
    let montantaRendre = sommeClient - montantTicket
    document.getElementById("Montantarendre").value = montantaRendre
    let billet10 = 0;

    while (montantaRendre >= 10) {
        billet10++
        montantaRendre = montantaRendre -10
    }

    let billet5 = 0;

    if (montantaRendre >= 5) {
        billet5++
        montantaRendre = montantaRendre -5
    }
    
    let piece1 = montantaRendre
    console.log(billet10,billet5,piece1)
    document.getElementById("billetsdix").value = billet10
    document.getElementById("billetscinq").value = billet5
    document.getElementById("piecesun").value = piece1

}