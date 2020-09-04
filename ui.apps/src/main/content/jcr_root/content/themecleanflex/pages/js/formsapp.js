$formsapp = {
    save(model, data) {
        var records = localStorage.getItem(model.endpointurl);
        if(!records) { 
            records = [];
        } else {
            records = JSON.parse(records);
        }
        records.push(data);
        localStorage.setItem(model.endpointurl, JSON.stringify(records, true, 2));
        window.dispatchEvent(new CustomEvent('datalist-storage-update',{}));
        window.dispatchEvent(new CustomEvent('form-clear',{}));
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
