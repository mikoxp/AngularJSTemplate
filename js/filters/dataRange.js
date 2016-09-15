my.filter("dataRange", function() {
    return function(items, from, to) {

        var result = [];
        if(to!=null) {
            var tmp = to.getTime() + 1000 * 60 * 60 * 24;
            to = new Date(tmp);
        }
        for (var i=0; i<items.length; i++){

            if((from==null && to==null)){
                result.push(items[i]);
            }else{
                if(from==null){
                    if(to>=items[i].dataDodania){
                        result.push(items[i]);
                    }
                }
                if(to==null){
                    if(from<=items[i].dataDodania){
                        result.push(items[i]);
                    }
                }
                if(from<=items[i].dataDodania && to>=items[i].dataDodania){
                    result.push(items[i]);
                }
            }
        }
        return result;
    };
});
