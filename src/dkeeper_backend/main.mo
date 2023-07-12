import List "mo:base/List";
import Debug "mo:base/Debug";

actor DKeeper {

  public type Note = {
    title : Text;
    content : Text;
  };

  // https://internetcomputer.org/docs/current/motoko/main/base/List/
  stable var notes : List.List<Note> = List.nil<Note>();

  public func createNote(titleText : Text, contentText : Text) : async () {
    let newNote : Note = {
      title = titleText;
      content = contentText;
    };
    notes := List.push<Note>(newNote, notes);
  };

  public query func readNotes() : async [Note] {
    return List.toArray<Note>(notes);
  };

  public func removeNode(id : Nat) : async () {
    var listFront = List.take<Note>(notes, id);
    var listBack = List.drop<Note>(notes, id +1);
    notes := List.append<Note>(listFront, listBack);
  };
};
