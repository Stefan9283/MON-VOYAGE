package MonVoyage.questions;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/question")
public class QuestionsController {
    @Autowired
    QuestionRepository questionRepository;

    @PreAuthorize("hasRole('USER')")
    @PostMapping()
    public ResponseEntity<HttpStatus> addQuestion(@RequestBody Questions questions) {
        try {
            questionRepository.save(questions);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
