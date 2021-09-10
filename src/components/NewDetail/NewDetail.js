import DetailForm from "../DetailForm/DetailForm";

const NewDetail = (props) => {
  const saveDetailDataHandler = (enteredDetailData) => {
    const detailData = {
      ...enteredDetailData,
      id: Math.random().toString(),
    };
    props.onAddDetail(detailData);
  };
  return (
    <div className="new-detail">
      <DetailForm onSaveExpenseData={saveDetailDataHandler} />
    </div>
  );
};
export default NewDetail;
