package com.hikmetcakir.util.response;

import java.util.List;

public class BaseResponse {
    private String resultDesc;
    private String resultStatus;
    private String resultCode;
    private List<Object> items;

    public BaseResponse() {
        this("OPERATION SUCESS", "SUCESS", "0", null);
    }

    public BaseResponse(String resultDesc, String resultStatus, String resultCode, List<Object> items) {
        this.resultDesc = resultDesc;
        this.resultStatus = resultStatus;
        this.resultCode = resultCode;
        this.items = items;
    }
    public static BaseResponse createSuccessBaseResponse(List<Object> items) {
        return new BaseResponse("OPERATION SUCCESS", "FAIL", "1", items);
    }

    public static BaseResponse createSuccessBaseResponse(Object item) {
        return new BaseResponse("OPERATION SUCCESS", "SUCCESS", "1", List.of(item));
    }
    public static BaseResponse createFailBaseResponse(String resultDesc) {
        return new BaseResponse(resultDesc, "FAIL", "1", null);
    }

    public String getResultDesc() {
        return resultDesc;
    }

    public void setResultDesc(String resultDesc) {
        this.resultDesc = resultDesc;
    }

    public String getResultStatus() {
        return resultStatus;
    }

    public void setResultStatus(String resultStatus) {
        this.resultStatus = resultStatus;
    }

    public String getResultCode() {
        return resultCode;
    }

    public void setResultCode(String resultCode) {
        this.resultCode = resultCode;
    }

    public List<Object> getItems() {
        return items;
    }

    public void setItems(List<Object> items) {
        this.items = items;
    }
}
