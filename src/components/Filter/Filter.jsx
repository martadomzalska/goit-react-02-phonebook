export const Filter = ({ value, onChange }) => (
  <>
    <label>
      Find contacts by name
      <input type="name" value={value} onChange={onChange} />
    </label>
  </>
);
