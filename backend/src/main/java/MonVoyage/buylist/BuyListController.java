package MonVoyage.buylist;

import MonVoyage.utils.exceptions.BuyListNotFound;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

// TODO this should only be accessed by the storekeeper
@RestController
@RequestMapping("/buyList")
public class BuyListController {
    @Autowired
    BuyListRepository buyListRepository;

    @PostMapping
    public ResponseEntity<HttpStatus> addBuyList(@RequestBody BuyList buyList) {
        try {
            buyListRepository.save(buyList);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/{roomId}/{hotelId}")
    public BuyList getBuyListForRoom(@PathVariable("roomId") int roomId,
                                                   @PathVariable("hotelId") int hotelId)
            throws BuyListNotFound {
        BuyList buyList = buyListRepository
                .findBuyListByRoomNumberAndHotelId(roomId, hotelId);
        if (buyList == null)
            throw new BuyListNotFound("BuyLists fot this room does not exist.");
        else
            return buyList;
    }

    @DeleteMapping("/{roomId}/{hotelId}")
    public ResponseEntity<HttpStatus> deleteBuyList(@PathVariable("roomId") int roomId,
                                               @PathVariable("hotelId") int hotelId) {
        try {
            buyListRepository.deleteBuyListByRoomNumberAndHotelId(roomId, hotelId);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
