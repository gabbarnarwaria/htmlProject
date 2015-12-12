
var data = [
    {title: "CBSE", schoolName: "School 1" , percentFunded: "Private"},
    {title: "ICSE", schoolName: "School 1" , percentFunded: "Government"},
    {title: "State Board", schoolName: "School 3" , percentFunded: "Government"}
]

var dataObject = {
    proposals: data,
    messageAnother: "Editable box"
}

$(function() {
    // knockout view model
    function ViewModel(_data) {
        var self = this;
        // knockout mapping JSON data to view model
        ko.mapping.fromJS(_data, {}, self);
        self.saveDataToServer  = function(){
            var ddd = ko.mapping.toJS(this);
            for(var index =0 ; index< ddd.proposals.length; index++){
                var school = ddd.proposals[index].schoolName;
                var fund = ddd.proposals[index].percentFunded;
                alert(school + " - " + fund);
            }

        }
    }
    var viewModelObject = new ViewModel(dataObject);
    // get data - sample data from Donors Choose API
    // bind the data

    ko.applyBindings(viewModelObject);

        // apply DataTables magic
        $("#proposals").DataTable( { responsive: true } );

});