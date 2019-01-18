package kaban.basic.auth;

public class AutenticationBean {

    private String message;

    public AutenticationBean(String message) {
        this.message = message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getMessage() {
        return this.message;
    }

    public String toString() {
        return String.format("HelloWorldBean [message=%s]", message);
    }
}
