const mongoose = require('mongoose')
const dataSchema=new mongoose.Schema({
    Zürich: { type: Boolean },
    Genève: { type: Boolean },
    Lugano: { type: Boolean },
    name: { type: String },
    Contact_Person: { type: String},
    Reference: { type: String },
    Phone: { type: String },
    email: { type: String },
    SWIFT: { type: String},
    Correspondent_Bank: { type: String },
    Irrevocable: { type: Boolean },
    Irrevocable_and_transferable: { type: Boolean },
    Irrevocable_Standby: { type: Boolean},
    Credit_Suisse: { type: Boolean},
    Correspondent_Bank_checkbox: { type: Boolean },
    Any_Bank: { type: Boolean},
    Any_Bank_in: { type: Boolean },
    Beneficiary_Name: { type: String },
    Full_Address: { type: String },
    Currency_and_Amount: { type: String },
    Credit_Amount_specification: { type: String},
    Maximum: { type: Boolean },
    Tolerance: { type: Boolean },
    About: { type: Boolean},
    specify: { type: Boolean},
    Available_Credit_Suisse: { type: Boolean },
    Available_Correspondent_Bank: { type: Boolean },
    Available_Any_Bank: { type: Boolean},
    Available_Any_Bank_in: { type: Boolean },
    Available_specify: { type: Boolean },
    Payment_at_sight: { type: Boolean },
    Negotiation: { type: Boolean},
    Deferred_payment: { type: Boolean },
    Mixed_payment: { type: Boolean },
    Acceptance: { type: Boolean },
    At_days_after: { type: Boolean },
    Date_of_shipment: { type: Date },
    Date_of_Invoice: { type: Date},
    Sight: { type: Boolean },
    define: { type: String},
    Drawee: { type: String }
})

const DataModel = mongoose.model('data', dataSchema)
module.exports = { DataModel }