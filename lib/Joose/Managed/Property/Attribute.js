Joose.Managed.Property.Attribute = new Joose.Proto.Class('Joose.Managed.Property.Attribute', {
    
	isa : Joose.Managed.Property,
    
    apply : function(target){
        this.SUPER(target.prototype);
    },
    
    
    unapply : function(from){
        this.SUPER(from.prototype);
    }
    
}).c;



//var protoAttributeMeta = new Joose.Proto.Inheritable('Joose.Managed.Property.Attribute', function (name, props) {
//    this.initialize(name, props)
//});
//
//
//protoAttributeMeta.extend({
//    
//    _name:  null,
//    _props: null,
//    
//    
//    getName:    function () { return this._name },
//    getProps:    function () { return this._props },
//
//    
//    initialize: function (name, props) {
//        this._name  = name;
//        this._props = props || {};
//    },
//    
//    
//    copy: function (to) {
//        return new to(this.getName(), this.getProps());
//    },
//    
//    
//    handleInit: function (classObject) {
//        var props = this.getProps();
//        var name  = this.getName();
//        
//        classObject.prototype[name]     = null;
//        if(typeof props.init != "undefined") {
//            classObject.prototype[name] = props.init;
//        }
//    },
//    
//    
//    handleProps: function (classObject) {
//        this.handleInit(classObject)
//    },
//    
//
//    addToClass: function (classObject) {
//        classObject.meta.attributes[this.getName()] = this;
//        this.handleProps(classObject)
//    },
//    
//    
//    doInitialization: function (object, paras) {
//        
//    },
//    
//    
//    isPersistent: function () {
//        return this.getProps().persistent != false;
//    }
//    
//});
//
//
//Joose.Managed.Property.Attribute = protoAttributeMeta.getClassObject();