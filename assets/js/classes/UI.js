export default class UI {
    static printReceivedInvitations(containerId, invitations, skills) {
        const container = document.getElementById(containerId)
        invitations.forEach(invitation => {
            container.innerHTML += `<div class="card card-matter mt-3">
                                        <div class="card-body">
                                            <form id="form-feedback${invitation.id}" onsubmit="event.preventDefault(), sendFeedback(${invitation.id})">
                                                <p>Dar feedback a ${invitation.user_invited.name}</p>
                                                ${this.htmlAnswers(skills)}
                                                <button class="btn btn-primary">Send Feedback</button>
                                            </form>
                                        </div>
                                    </div>`
        });
    }
    static htmlAnswers(skills) {
        let html = ``
        skills.forEach((skill, index) => {
            html += `<h6>${skill.name}</h6>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="score${index}" id="one${index}" data-skill="${skill.id}" value="1" checked>
                <label class="form-check-label" for="one${index}">
                1 punto
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="score${index}" id="two${index}" data-skill="${skill.id}" value="2">
                <label class="form-check-label" for="two${index}">
                2 puntos
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="score${index}" id="three${index}" data-skill="${skill.id}" value="3">
                <label class="form-check-label" for="three${index}">
                3 puntos
                </label>
            </div>`;
        })
        return html;
    }

    static printReceivedFeedback(containerId, feedback) {
        console.log(feedback)
        console.log(feedback[4].skills[0].name)
        console.log(feedback[4].skills[0].pivot.score)
        console.log(feedback[4].skills[0])
        const container = document.getElementById(containerId)
        feedback.forEach(feedback => {
            const score = feedback.skills
            if(!feedback.evaluated_skills == 0) { //solo muestra datos de los usuarios que ya han dado feedback
                container.innerHTML += `<div class="card card-matter mt-3 shadow">
                                            <h5>Feedback de ${feedback.user_invited.name}</h5>
                                            <div class="card-body">
                                                <div class="">
                                                    <h6>${score[0].name} 🗣</h6>
                                                    <p>${score[0].pivot.score}</p>
                                                </div>
                                                <div class="">
                                                    <h6>${score[1].name} 🙌🏼</h6>
                                                    <p>${score[1].pivot.score}</p>
                                                </div>
                                                <div class="">
                                                    <h6>${score[2].name} 🏆</h6>
                                                    <p>${score[2].pivot.score}</p>
                                                </div>
                                            </div>
                                        </div>`
            }
        })
    }
}