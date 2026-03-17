// calculate inclusive prices
// tax rate = 0.16


const taxRate = 0.16
const items = [
    {
    item: "Milk",
    exclPrice: 40,
        supplier: "Mount Kenya"
    },
    {
        item: "Bread",
            exclPrice: 60,
            supplier: "broadway Ltd"
    },
    {
         item: "Yoghurt",
         exclPrice: 150,
         supplier: "Delamare"
            
    },
    {
         item: "Eggs",
         exclPrice: 420,
         supplier: "kenchick"
    },
    {
         item: "Soap",
         exclPrice: 80,
         supplier: "Geisha"
    }
]
 function calculateInclusivePrice (exclPrice, taxRate) {
        const taxedAmount = exclPrice * taxRate
        const inclusivePrice = taxedAmount + exclPrice
        return inclusivePrice
     
}

for(element of items) {
    let incPrice = calculateInclusivePrice(element.exclPrice, taxRate)
    console.log(`${element.item} from ${element.supplier} should be sold at ${incPrice}`)
}

 




