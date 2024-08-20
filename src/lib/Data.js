let data = {
    "categories": [
      {
        "name": "CSPM Executive DashBoard",
        "widgets": [
          {
            "id": "widget1",
            "type": "pie chart",
            "title": "Cloud Accounts",
            "data": {
              "labels": ["Jan", "Feb", "Mar", "Apr"],
              "datasets": [
                { browser: "Connected", visitors: 275, fill: "var(--color-Connected)" },
                { browser: "Not Connected", visitors: 200, fill: "var(--color-Not_Connected)" },
              ]
            },
            "description":"Connection details"
          },
          {
            "id": "widget2",
            "type": "pie chart",
            "title": "Risk Assessment",
            "data": {
              "labels": ["Jan", "Feb", "Mar", "Apr"],
              "datasets": [
                { browser: "Failed", visitors: 65, fill: "var(--color-Failed)" },
                { browser: "Warning", visitors: 200, fill: "var(--color-Warning)" },
                { browser: "Not available", visitors: 287, fill: "var(--color-Not_Connected)" },
                { browser: "Passed", visitors: 973, fill: "var(--color-Passed)" },
              ]
            },
            "description":"Analyzing risk assessment"
          },
        ]
      },
      {
        "name": "Registry Scan",
        "widgets": [
          {
            "id": "widget1",
            "type": "bar chart",
            "title": "Image Risk Assessment",
            "data": {
              "labels": ["Jan", "Feb", "Mar", "Apr"],
              "datasets": [
                { month: "February", desktop: 305, mobile: 200 },
                { month: "March", desktop: 237, mobile: 120 },
                { month: "April", desktop: 73, mobile: 190 },
                { month: "May", desktop: 209, mobile: 130 },
                { month: "June", desktop: 214, mobile: 140 },
              ]
            },
            "description":"Analyzing risk assessment"
          },
          {
            "id": "widget2",
            "type": "area chart",
            "title": "Image Security Assessment",
            "data": {
              "labels": ["Jan", "Feb", "Mar", "Apr"],
              "datasets": [
                { Critical: "February", desktop: 305, mobile: 200 },
                { month: "March", desktop: 237, mobile: 120 },
                { month: "April", desktop: 73, mobile: 190 },
                { month: "May", desktop: 209, mobile: 130 },
                { month: "June", desktop: 214, mobile: 140 }
              ]
            }
          }
        ]
      },
      {
        "name": "CWPP DashBoard",
        "widgets": [
          {
            "id": "widget1",
            "type": "No",
            "title": "Top 5 Namespace Specific Alert",
            "data": {
              "labels": ["Jan", "Feb", "Mar", "Apr"],
              "datasets": [
                { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
                { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
                { browser: "firefox", visitors: 287, fill: "var(--color-firefox)" },
                { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
                { browser: "other", visitors: 190, fill: "var(--color-other)" }
              ]
            }
          },
          {
            "id": "widget2",
            "type": "No",
            "title": "Workload Alerts",
            "data": {
              "labels": ["Jan", "Feb", "Mar", "Apr"],
              "datasets": [
                { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
                { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
                { browser: "firefox", visitors: 287, fill: "var(--color-firefox)" },
                { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
                { browser: "other", visitors: 190, fill: "var(--color-other)" }
              ]
            }
          }
        ]
      }
    ]
  }
  export default data