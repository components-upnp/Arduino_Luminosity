# Arduino_Luminosity
Composant permettant de de régler l'intensité lumineuse par rapport à la luminosité ambiante.


INSTALLATION:

    i - Avoir nodeJs installé sur la machine
    ii - Télécharger et décompresser l'archive du projet dans un dossier
    iii - Lancer les commandes npm install johnny-five et npm install peer-upnp depuis un terminal dans le répertoire du projet
    iv - Cabler les composants physiques sur la carte Arduino (confère la schéma ci-dessous)
    v - Brancher la carte sur la machine (port COM3 par défaut, si branchée sur un autre port, le préciser dans index.js)
    vi - Depuis l'IDE Arduinon, lancer le sketch File > Examples > Firmata > StandardFirmata
    vii - Lancer l'application avec la commande node index.js
    
Schéma du circuit:

![alt tag](https://github.com/components-upnp/Arduino_Luminosity/blob/master/upnp_Luminosity/circuit.png)


Ce device, lorsque la luminosité change, envoie un string, via la méthode notify de LuminosityService, représentant une valeur de 0 à 100. 0 pour une luminosité ambiante maximale et 100 inversement.

![alt tag](https://github.com/components-upnp/Arduino_Luminosity/blob/master/upnp_Luminosity/arduino_luminosity.png)

Cas d'utilisation du potentiomètre UpNP:
    -Gestion de la luminosité dans une salle.
