using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace UpMeetEventBackend.Models;

public partial class EventsContext : DbContext
{
    public EventsContext()
    {
    }

    public EventsContext(DbContextOptions<EventsContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Event> Events { get; set; }

    public virtual DbSet<Favorite> Favorites { get; set; }

    public virtual DbSet<User> Users { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        => optionsBuilder.UseSqlServer("Server=ALEX-2020BUILD;Database=Events;Trusted_Connection=True;TrustServerCertificate=True");

        //=> optionsBuilder.UseSqlServer("Server=Bertha;Database=Events;Trusted_Connection=True;TrustServerCertificate=True");


    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Event>(entity =>
        {
                        entity.HasKey(e => e.Id).HasName("PK__Events__3213E83F03D149AC");

            //entity.HasKey(e => e.Id).HasName("PK__Events__3213E83FDCF695B4");


            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Date)
                .HasMaxLength(40)
                .HasColumnName("date");
            entity.Property(e => e.Description)
                .HasMaxLength(500)
                .HasColumnName("description");
            entity.Property(e => e.Image)
                .HasMaxLength(1000)
                .HasColumnName("image");
            entity.Property(e => e.Location)
                .HasMaxLength(80)
                .HasColumnName("location");
            entity.Property(e => e.Name)
                .HasMaxLength(100)
                .HasColumnName("name");
            entity.Property(e => e.Time)
                .HasMaxLength(10)
                .HasColumnName("time");
        });

        modelBuilder.Entity<Favorite>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Favorite__3213E83FDFF74BD2");

            //entity.HasKey(e => e.Id).HasName("PK__Favorite__3213E83FB47764F8");


            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.EventId).HasColumnName("eventID");
            entity.Property(e => e.UserId).HasColumnName("userId");

            entity.HasOne(d => d.Event).WithMany(p => p.Favorites)
                .HasForeignKey(d => d.EventId)

                .HasConstraintName("FK__Favorites__event__3B75D760");

            entity.HasOne(d => d.User).WithMany(p => p.Favorites)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("FK__Favorites__userI__3C69FB99");

            //    .HasConstraintName("FK__Favorites__event__5070F446");

            //entity.HasOne(d => d.User).WithMany(p => p.Favorites)
            //    .HasForeignKey(d => d.UserId)
            //    .HasConstraintName("FK__Favorites__userI__5165187F");

        });

        modelBuilder.Entity<User>(entity =>
        {

            entity.HasKey(e => e.Id).HasName("PK__User__3213E83F6348E32A");

            //entity.HasKey(e => e.Id).HasName("PK__User__3213E83FFC997EF2");


            entity.ToTable("User");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Password)
                .HasMaxLength(100)
                .HasColumnName("password");
            entity.Property(e => e.UserName)
                .HasMaxLength(100)
                .HasColumnName("userName");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
