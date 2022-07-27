function getCard() {
      let arr = []
      let res = []
      arr.push(addArr(5,1,15,'B'))
      arr.push(addArr(5,16,30,'I'))
      arr.push(addArr(4,31,45,'N'))
      arr.push(addArr(5,46,60,'G'))
      arr.push(addArr(5,61,75,'O'))
      arr.map(item=>{
            item.map(i=>{
                  res.push(i)
            })
      })
      return res
}
getCard()
function addArr (num,min,max,letter) {
      let res = letter
      let arr = []
      for(let i = 0;i<num;i++){
            let num = getRandomNum(min,max)
            if(!arr.includes(num)){
                  arr.push(num)
            }
            else{
                  --i
                  continue
            }
      }
      arr = arr.map(item=>{
           return item = `${letter}${item}`
      })
      return arr 
}
function getRandomNum(min, max) {
      let num = Math.floor(Math.random() * (max - min)) + min
      return num
}

