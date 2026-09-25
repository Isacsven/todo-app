## Varför är .map ett löpande band?

1. I `App.jsx` under `ul` ligger `todos.map(function (todo) { })`.

2. I UI blir varje element i todo listan en egen `li` tagg med sin todo text och en ta bort knapp. Varje element i todo listan körs genom funktionen och blir en ny JSX `li` tagg i en ny array, som ett löpande band.

3. `map` behövs så att alla element i listan skrivs ut oberoende på hur stor eller liten listan är. Så att listan med `li` taggar kan växa och minska när man lägger till eller tar bort en todo. Alternativet är att man själv skapar en rad för varje sak i todo listan, men då är UI raderna inte dynamisk, alltså den kan inte växa eller minska.

## Varför är .filter en sil och inte en kniv?

1. I `App.jsx`, första raden i `handleRemove` funktionen.

2. Det todo elementet tas bort från listan. Den nya listan `filter` skapar används sen som argument för `setTodos` anropet, vilket säger till React att re-render, vilket kör `map` igen fast med den ny listan, vilket i UI uppdaterar listan utan det elementet.

3. `filter` behövs så att bara de todo elementen som inte klarar villkoret stannar i den nya listan. `filter` är alltså mer som sil, man får en ny array, och inte en kniv då den inte muterar samma array.

## Vad gör key — och vad är den INTE?

1. I `App.jsx`, inuti `map` funktion på `li` taggarna sitter `key` attributet.

2. I UI syns det inte.

3. Det är till för React att kunna unikt identifiera/spåra syskonen när listan ändras.