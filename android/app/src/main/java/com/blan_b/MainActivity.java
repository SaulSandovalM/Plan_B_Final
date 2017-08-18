package com.blan_b;
import android.content.Intent;
import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {
    @Override
    protected String getMainComponentName() {
        return "Blan_B";
    }
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        MainApplication.getCallbackManager().onActivityResult(requestCode, resultCode, data);
}
}
