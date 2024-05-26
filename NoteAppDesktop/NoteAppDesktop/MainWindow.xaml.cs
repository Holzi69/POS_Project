using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using System.Windows;

namespace NoteAppDesktop
{
    public partial class MainWindow : Window
    {
        private readonly HttpClient client = new HttpClient();
        private const string apiUrl = "http://localhost:8080/api/notes";

        public MainWindow()
        {
            InitializeComponent();
            RefreshNotes();
        }

        private async void CreateNoteButton_Click(object sender, RoutedEventArgs e)
        {
            String title = txtTitle.Text;
            var content = txtContent.Text;

            if (!string.IsNullOrWhiteSpace(title) && !string.IsNullOrWhiteSpace(content))
            {
                Note note = new Note { title = title, content = content };
                await CreateNoteAsync(note);
                RefreshNotes();
            }
            else
            {
                MessageBox.Show("Please enter both title and content.");
            }
        }

        private async void UpdateNoteButton_Click(object sender, RoutedEventArgs e)
        {
            var selectedNote = (Note)lstNotes.SelectedItem;
            if (selectedNote != null)
            {
                var title = txtTitle.Text;
                var content = txtContent.Text;
                selectedNote.title = title;
                selectedNote.content = content;

                await UpdateNoteAsync(selectedNote);
                RefreshNotes();
            }
            else
            {
                MessageBox.Show("Please select a note to update.");
            }
        }

        private async void DeleteNoteButton_Click(object sender, RoutedEventArgs e)
        {
            var selectedNote = (Note)lstNotes.SelectedItem;
            if (selectedNote != null)
            {
                await DeleteNoteAsync(selectedNote.id);
                RefreshNotes();
            }
            else
            {
                MessageBox.Show("Please select a note to delete.");
            }
        }

        private async void RefreshNotesButton_Click(object sender, RoutedEventArgs e)
        {
            RefreshNotes();
        }

        private async Task CreateNoteAsync(Note note)
        {
            var json = System.Text.Json.JsonSerializer.Serialize(note);
            var content = new StringContent(json, Encoding.UTF8, "application/json");
            await client.PostAsync(apiUrl, content);
        }

        private async Task UpdateNoteAsync(Note note)
        {
            var json = Newtonsoft.Json.JsonConvert.SerializeObject(note);
            var content = new StringContent(json, Encoding.UTF8, "application/json");
            await client.PutAsync($"{apiUrl}/{note.id}", content);
        }

        private async Task DeleteNoteAsync(long id)
        {
            await client.DeleteAsync($"{apiUrl}/{id}");
        }

        private async void RefreshNotes()
        {
            var response = await client.GetAsync(apiUrl);
            if (response.IsSuccessStatusCode)
            {
                var json = await response.Content.ReadAsStringAsync();
                var notes = JsonSerializer.Deserialize<List<Note>>(json);
                foreach (var note in notes)
                {
                    lstNotes.ItemsSource = notes;
                }
            }
        }
    }
}
