using System;
using System.Collections.Generic;
using System.Text;

namespace Notes.DAL.Entities
{
    public abstract class BaseEntity
    {
        public Guid Id { get; set; }

        public bool IsDeleted { get; set; }
    }
}
