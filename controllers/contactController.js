const asyncHandler = require("express-async-handler")

//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Get all contacts" })
});

//@desc Create contact
//@route GET /api/contacts
//@access public
const createContact = asyncHandler(async (req, res) => {
    console.log("The Request body is:", req.body)
    const { name, gmail } = req.body;
    if(!name || !gmail) {
        res.status(400)
        throw new Error ("All feilds are mandatory!");
    }
    res.status(200).json({ message: "Create contact" })
});

//@desc Get contacts
//@route GET /api/contacts
//@access public
const getContact = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Get contact for ${ req.params.id }`})
});

//@desc Update contact
//@route GET /api/contacts
//@access public
const updateContact = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `update for contact ${ req.params.id }` })
});

//@desc Delete contact
//@route GET /api/contacts
//@access public
const deleteContact = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `delete for contact ${ req.params.id }` })
});

module.exports = { getContact, getContacts, createContact, updateContact, deleteContact }