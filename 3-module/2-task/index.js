let calendar = {
    from: new Date('2018-01-01T15:09:10Z'),
    to: new Date('2018-02-01T10:09:10Z')
};

calendar[Symbol.iterator] = function () {
    let current = this.from,
    last = this.to;

return {
  
  next() {


    if (current < last) {
        
        if ((current.getDay() == 6) || (current.getDay() == 5)) {
        
          return {
                  current: current.setDate(current.getDate()+1),
                  done: false,
                  value: '[' + ( "0" + current.getDate()).slice(-2) + ']'
                }
                   
        } else {
              return {
                  current: current.setDate(current.getDate()+1),
                  done: false,
                  value: ("0" + current.getDate()).slice(-2)
              }
           
        }
 
    } else {
        return {
            done: true
        }
    }

  }
}
};


