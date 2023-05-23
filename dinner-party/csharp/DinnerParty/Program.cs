using System;
using System.Collections.Generic;
using System.Linq;

List<Guest> guests = getGuests(); //setting variable guests = to function getGuests
Dictionary<string, List<Guest>> tables = new Dictionary<string, List<Guest>>() // table = key, value = guest list which is empty currently
{
    {"Table 1", new List<Guest>()},
    {"Table 2", new List<Guest>()}
};

foreach (Guest guest in guests) //loop through each guest
{
    List<Guest> tableGuests = tables["Table 1"]; //list of table guest sitting at Table 1
    List<string> tableOccupations = tableGuests.Select(g => g.Occupation).Distinct().ToList();
    //List of occupations and determins if each occupation is Distinct/no duplicates
    if (tableOccupations.Contains(guest.Occupation)) //if the occupation already exists, add to table 2
    {
        tables["Table 2"].Add(guest);
    }
    else //if not, keep at table 1
    {
        tables["Table 1"].Add(guest);
    }
}

foreach (string tableName in tables.Keys) //iterate through each table
{
    List<Guest> tableGuests = tables[tableName]; //new list called tableGuests which will be the table name
    Console.WriteLine(tableName); //write table name
    foreach (Guest guest in tableGuests) //iterate through each guest at the table and print, name, occupation and bio
    {
        Console.WriteLine($"{guest.Name} ({guest.Occupation}) {guest.Bio}");
    }
}



List<Guest> getGuests() //equivalance of an array of objects that are quests, utilizing Guest class to create
{
    List<Guest> allGuests = new List<Guest>() {
           new Guest() {
            Name = "Marilyn Monroe",
            Occupation = "entertainer",
            Bio = "(1926 - 1962) American actress, singer, model"
           },
           new Guest() {
            Name = "Abraham Lincoln",
            Occupation = "politician",
            Bio = "(1809 - 1865) US President during American civil war"
           },
           new Guest() {
            Name = "Martin Luther King",
            Occupation = "activist",
            Bio = "(1929 - 1968)  American civil rights campaigner"
           },
           new Guest() {
            Name = "Rosa Parks",
            Occupation = "activist",
            Bio = "(1913 - 2005)  American civil rights activist"
           },
           new Guest() {
            Name = "Peter Sellers",
            Occupation = "entertainer",
            Bio = "(1925 - 1980) British actor and comedian"
           },
           new Guest() {
            Name = "Alan Turing",
            Occupation = "computer scientist",
            Bio = "(1912 - 1954) - British computing pioneer, Turing machine, algorithms, cryptology, computer architecture, saved the world"
           },
           new Guest() {
            Name = "Admiral Grace Hopper",
            Occupation = "computer scientist",
            Bio = "(1906–1992) - developed early compilers: FLOW-Matic, COBOL; worked on UNIVAC; gave speeches on computer history, where she gave out nano-seconds"
           },
           new Guest() {
            Name = "Indira Gandhi",
            Occupation = "politician",
            Bio = "(1917 - 1984) Prime Minister of India 1966 - 1977"
           }

    };
    return allGuests;
}

public class Guest //Guest object, comprised of Name, Occupation, and Bio
{
    public string Name { get; set; }
    public string Occupation { get; set; }
    public string Bio { get; set; }
};


