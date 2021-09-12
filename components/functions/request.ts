


export async function requestApiGet (url, func) {

 

   await fetch(url).then(res => res.json()).then(data => 
      
      
    func( data[data.length -1].array) )
    




        

}

export async function requestApiPost (url, array) {

    fetch(url, {
        method: "POST",
        body: JSON.stringify({
            array,
        }),
      });
  


}