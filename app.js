
quote_url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'



function getQuotes() {
    return fetch(quote_url).then((res) => res.json())
}

let colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
		  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
		  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
		  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
		  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
		  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];


let current = ""
let quotes = getQuotes()




function dothework(){

    let color = colorArray[Math.floor(Math.random() * colorArray.length)]
    console.log(color)

    document.getElementsByTagName('body')[0].style.backgroundColor = color
    
    document.getElementById('quote-box').style.color = color
    document.getElementById('tweet-icon').style.color = color
    document.getElementById('new-quote').style.backgroundColor = color


    quotes.then((data)=>{
        let quote_text_author = data.quotes[Math.floor(Math.random() * data.quotes.length)]
        console.log(quote_text_author)
        
        document.getElementById('text').innerHTML = '<i class="fas fa-quote-left"></i> ' +quote_text_author.quote
        current = quote_text_author.quote
        document.getElementById('author').innerHTML = '- '+ quote_text_author.author
    })
}

dothework()
document.getElementById('new-quote').addEventListener('click', dothework)






