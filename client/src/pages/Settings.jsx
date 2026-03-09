import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Settings() {

  return (

    <div className="max-w-3xl mx-auto space-y-6">

      <h1 className="text-3xl font-diary">
        Settings
      </h1>

      {/* PROFILE */}

      <Card>

        <CardHeader>
          <CardTitle>Profile</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">

          <Input placeholder="Name" />

          <Input placeholder="Email" />

          <Button>
            Update Profile
          </Button>

        </CardContent>

      </Card>


      {/* APPEARANCE */}

      <Card>

        <CardHeader>
          <CardTitle>Appearance</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">

          <p className="text-sm text-muted">
            Choose your theme
          </p>

          <div className="flex gap-3">

            <Button variant="outline">
              Light
            </Button>

            <Button variant="outline">
              Dark
            </Button>

          </div>

        </CardContent>

      </Card>


      {/* AI FEATURES */}

      <Card>

        <CardHeader>
          <CardTitle>AI Features</CardTitle>
        </CardHeader>

        <CardContent className="space-y-3">

          <p className="text-sm text-muted">
            Enable AI writing assistance and insights.
          </p>

          <Button variant="outline">
            Enable AI Assistant
          </Button>

        </CardContent>

      </Card>


      {/* PRIVACY */}

      <Card>

        <CardHeader>
          <CardTitle>Privacy</CardTitle>
        </CardHeader>

        <CardContent className="space-y-3">

          <Button variant="outline">
            Export My Data
          </Button>

          <Button variant="destructive">
            Delete Account
          </Button>

        </CardContent>

      </Card>

    </div>

  )

}