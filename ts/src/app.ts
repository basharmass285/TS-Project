import { Task } from "./models/Task.js";
import { Meeting } from "./models/Meeting.js"
import { SportsLeisure } from "./models/SportsLeisure.js"


let notes: (Meeting | Task | SportsLeisure)[] = [];
let editMode: boolean = false;

// Function to render notes
function renderNotes() {
    const notesContainer = document.getElementById("notesContainer") as HTMLElement;
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
            deleteButton.addEventListener('click', function() {
                deleteNote(note.id);
            });
        }
    });
}

// Function to toggle edit mode
function toggleEditMode() {
    editMode = !editMode;
    const addNoteContainer = document.getElementById("addNoteContainer") as HTMLElement;
    const editModeButton = document.getElementById("editModeButton") as HTMLElement;

    if (editMode) {
        addNoteContainer.style.display = "block";
        editModeButton.textContent = "View Mode";
    } else {
        addNoteContainer.style.display = "none";
        editModeButton.textContent = "Edit Mode";
    }
    renderNotes();
}

// Function to add a new note
function addNote() {
    const noteTitleInput = document.getElementById("noteTitle") as HTMLInputElement;
    const noteTextInput = document.getElementById("noteText") as HTMLInputElement;
    const noteImageInput = document.getElementById("noteImage") as HTMLInputElement;

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
function deleteNote(id: number) {
    notes = notes.filter(note => note.id !== id);
    renderNotes();
}

// Initialize
document.getElementById("editModeButton")?.addEventListener("click", toggleEditMode);
document.getElementById("addNoteButton")?.addEventListener("click", addNote);




