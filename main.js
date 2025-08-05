if (window.location.pathname.includes("course.html")) {
  const courseTitle = document.getElementById("course-title");
  const courseVideo = document.getElementById("course-video");
  const progressBar = document.getElementById("progressBar");

  const courseData = {
    html: {
      title: "HTML Basics",
      video: "https://www.youtube.com/embed/UB1O30fR-EE"
    },
    css: {
      title: "CSS Styling",
      video: "https://www.youtube.com/embed/yfoY53QXEnI"
    },
    js: {
      title: "JavaScript Essentials",
      video: "https://www.youtube.com/embed/hdI2bqOjy3c"
    }
  };

  const params = new URLSearchParams(window.location.search);
  const courseKey = params.get("course");

  if (courseKey && courseData[courseKey]) {
    courseTitle.textContent = courseData[courseKey].title;
    courseVideo.src = courseData[courseKey].video;
    progressBar.value = localStorage.getItem(`progress-${courseKey}`) || 0;
  }

  window.updateProgress = (value) => {
    progressBar.value = value;
    localStorage.setItem(`progress-${courseKey}`, value);
  };
}
