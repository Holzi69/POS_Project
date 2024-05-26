using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Metadata;
using System.Text;
using System.Threading.Tasks;

namespace NoteAppDesktop
{
    public class Note
    {
        public long id { get; set; }
        public string? title { get; set; }
        public string? content { get; set; }

        public override string ToString()
        {
            return $"Id: {id}, Title: {title}, Content: {content}";
        }
    }
}
