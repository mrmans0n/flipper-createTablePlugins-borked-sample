package com.example.flipperbugexample

import com.facebook.flipper.core.FlipperConnection
import com.facebook.flipper.core.FlipperPlugin

class NormalExamplePlugin : FlipperPlugin {
    override fun onConnect(connection: FlipperConnection?) {
    }

    override fun runInBackground(): Boolean = false

    override fun onDisconnect() {
    }

    override fun getId(): String = "normalexample"
}