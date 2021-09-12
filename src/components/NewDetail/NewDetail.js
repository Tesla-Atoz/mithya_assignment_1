import DetailForm from "../DetailForm/DetailForm";

const NewDetail = (props) => {
  const saveDetailDataHandler = (enteredDetailData) => {
    const detailData = {
      ...enteredDetailData,
      id: Math.random().toString(),
      edit: false,
    };
    props.onAddDetail(detailData);
  };

  return (
    <div className="new-detail">
      <DetailForm
        onSaveExpenseData={saveDetailDataHandler}
        currentData={props.currentData}
        onUpdateDetail={props.onUpdateDetail}
      />
    </div>
  );
};
export default NewDetail;
