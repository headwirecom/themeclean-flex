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
    },
    
    load(path) {
        var records = localStorage.getItem(path);
        if(!records) { 
            return [];
        } else {
            return JSON.parse(records);
        }
    }
}