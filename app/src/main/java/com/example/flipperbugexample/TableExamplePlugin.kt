package com.example.flipperbugexample

import android.util.Log
import com.facebook.flipper.core.FlipperConnection
import com.facebook.flipper.core.FlipperObject
import com.facebook.flipper.plugins.common.BufferingFlipperPlugin
import io.reactivex.Observable
import io.reactivex.disposables.SerialDisposable
import java.text.SimpleDateFormat
import java.util.*
import java.util.concurrent.TimeUnit

class TableExamplePlugin : BufferingFlipperPlugin() {
    private val disposable = SerialDisposable()
    private val sdf = SimpleDateFormat("dd/M/yyyy hh:mm:ss", Locale.US)

    override fun getId(): String = "tableexample"

    override fun onConnect(connection: FlipperConnection?) {
        super.onConnect(connection)
        disposable.set(Observable.interval(2000, TimeUnit.SECONDS).subscribe {
            val currentDate = sdf.format(Date())
            val value = FlipperObject.Builder()
                .put("column1", currentDate)
                .put("column2", "example")
                .put("column3", "interval $it")
                .build()
            Log.d("TEST", "sent $value to flipper")
            send("newRow", value)
        })
    }

    override fun onDisconnect() {
        super.onDisconnect()
        disposable.set(null)
    }
}