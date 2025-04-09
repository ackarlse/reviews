export default function CommentForm() {
  return (
    <form>
      <label>
        Brukernavn
        <input type="text" name="user" />
      </label>
      <label>
        Kommentar
        <textarea name="comment"></textarea>
      </label>
      <button>Send</button>
    </form>
  );
}
