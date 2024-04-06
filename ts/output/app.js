var _a, _b;
import { Task } from "./models/Task.js";
let notes = [];
let editMode = false;
// Function to render notes
function renderNotes() {
    const notesContainer = document.getElementById("notesContainer");
    notesContainer.innerHTML = "";
    notes.forEach(note => {
        const noteElement = document.createElement("div");
        noteElement.classList.add("note");
        noteElement.innerHTML = `
            <h2>${note.title}</h2>
            <p>${note.text}</p>
            <img src="${note.imageAddress}" alt="Note Image">
            ${editMode ? `<button class="deleteButton" onclick="deleteNote(${note.id})">X</button>` : ''}
        `;
        notesContainer.appendChild(noteElement);
        const deleteButton = noteElement.querySelector('.deleteButton');
        if (deleteButton && editMode) {
            deleteButton.addEventListener('click', function () {
                deleteNote(note.id);
            });
        }
    });
}
// Function to toggle edit mode
function toggleEditMode() {
    editMode = !editMode;
    const addNoteContainer = document.getElementById("addNoteContainer");
    const editModeButton = document.getElementById("editModeButton");
    if (editMode) {
        addNoteContainer.style.display = "block";
        editModeButton.textContent = "View Mode";
    }
    else {
        addNoteContainer.style.display = "none";
        editModeButton.textContent = "Edit Mode";
    }
    renderNotes();
}
// Function to add a new note
function addNote() {
    const noteTitleInput = document.getElementById("noteTitle");
    const noteTextInput = document.getElementById("noteText");
    const noteImageInput = document.getElementById("noteImage");
    const title = noteTitleInput.value.trim();
    const text = noteTextInput.value.trim();
    const imageAddress = noteImageInput.value.trim();
    const deadlineDate = new Date();
    if (!title || !text || !imageAddress) {
        alert("Please fill in all fields.");
        return;
    }
    const id = notes.length + 1; // Generate unique ID
    const newNote = new Task(id, title, text, imageAddress, deadlineDate); // For now, let's assume it's a Task note
    notes.push(newNote);
    renderNotes();
}
// Function to delete a note
function deleteNote(id) {
    notes = notes.filter(note => note.id !== id);
    renderNotes();
}
// Initialize
(_a = document.getElementById("editModeButton")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", toggleEditMode);
(_b = document.getElementById("addNoteButton")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", addNote);
