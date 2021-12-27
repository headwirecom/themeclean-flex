$formsapp = {
    save(model, data, index) {
        var records = localStorage.getItem(model.endpointurl);
        if(!records) { 
            records = [];
        } else {
            records = JSON.parse(records);
        }
        if(index !== undefined) {
            if(typeof(index) !== 'number') {
                index = parseInt(index);
            }
        } else {
            index = -1;
        }
        console.log(`Row Index: ${index}`)
        if(index >= 0 && records.length > index) {
            records[index] = data;
        } else {
            records.push(data);
        }
        localStorage.setItem(model.endpointurl, JSON.stringify(records, true, 2));
        window.dispatchEvent(new CustomEvent('datalist-storage-update',{}));
        window.dispatchEvent(new CustomEvent('form-clear',{}));
        return true
    },
    
    load(path) {
        var records = localStorage.getItem(path);
        if(!records) { 
            return [];
        } else {
            return JSON.parse(records);
        }
    },

    delete(data, active, path) {
        // data loaded from local storage, find rows and delete them, then reset local storage
        console.log('deleting rows');
        let newData = data;
        for( let i = active.length-1; i >= 0; i--) {
            // iterate from end and delete active rows as we find them
            if( active[i] ) {
                newData.splice(i,1);
            }
        }
        localStorage.setItem(path,JSON.stringify(newData));
        return newData;
    }
}
